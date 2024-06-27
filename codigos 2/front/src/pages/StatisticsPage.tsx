import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

interface Statistics {
  usersCount: number;
  exchangesCount: number;
  adsCount: number;
  partnersCount: number;
  acceptedOffersCount: number;
  totalOffersCount: number;
  completedTradesCount: number;
  totalTradesCount: number;
  activePostsCount: number;
  totalPostsCount: number;
}

interface Goals {
  usersGoal: number;
  exchangesGoal: number;
  adsGoal: number;
  partnersGoal: number;
}

const StatisticsPage: React.FC = () => {
  const [stats, setStats] = useState<Statistics>({
    usersCount: 50,
    exchangesCount: 90,
    adsCount: 100,
    partnersCount: 20,
    acceptedOffersCount: 50,
    totalOffersCount: 90,
    completedTradesCount: 5,
    totalTradesCount: 30,
    activePostsCount: 50,
    totalPostsCount: 100,
  });

  const [goals, setGoals] = useState<Goals>({
    usersGoal: 1000,
    exchangesGoal: 500,
    adsGoal: 200,
    partnersGoal: 50,
  });

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error(`Failed to fetch data from ${url}:`, error);
      return 0;
    }
  };

  const fetchStatistics = async () => {
    const [
      usersCount,
      exchangesCount,
      adsCount,
      partnersCount,
      acceptedOffersCount,
      totalOffersCount,
      completedTradesCount,
      totalTradesCount,
      activePostsCount,
      totalPostsCount
    ] = await Promise.all([
      fetchData('http://localhost:8081/api/statistics/users/count'),
      fetchData('http://localhost:8081/api/statistics/exchanges/count'),
      fetchData('http://localhost:8081/api/statistics/advertisements/count'),
      fetchData('http://localhost:8081/api/statistics/partners/count'),
      fetchData('http://localhost:8081/api/statistics/offers/accepted/count'),
      fetchData('http://localhost:8081/api/statistics/offers/total/count'),
      fetchData('http://localhost:8081/api/statistics/trades/completed/count'),
      fetchData('http://localhost:8081/api/statistics/trades/total/count'),
      fetchData('http://localhost:8081/api/statistics/posts/active/count'),
      fetchData('http://localhost:8081/api/statistics/posts/total/count')
    ]);

    setStats({
      usersCount,
      exchangesCount,
      adsCount,
      partnersCount,
      acceptedOffersCount,
      totalOffersCount,
      completedTradesCount,
      totalTradesCount,
      activePostsCount,
      totalPostsCount,
    });
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const calculatePercentage = (count: number, total: number) => {
    return total > 0 ? (count / total) * 100 : 0;
  };

  const renderPieChart = (title: string, percentage: number) => {
    const data = [
      { name: 'Atual', value: percentage },
      { name: 'Resto', value: 100 - percentage },
    ];
    const COLORS = ['#00C853', '#A5D6A7'];

    return (
      <ChartContainer>
        <h3>{title}</h3>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <PercentageText>{percentage.toFixed(2)}%</PercentageText>
      </ChartContainer>
    );
  };

  const renderBarChart = (title: string, current: number, goal: number) => {
    const data = [
      {
        name: title,
        Atual: current,
        Meta: goal,
      },
    ];
    return (
      <ChartContainer>
        <h3>{title}</h3>
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Atual" fill="#00C853" />
          <Bar dataKey="Meta" fill="#03300B" />
        </BarChart>
      </ChartContainer>
    );
  };

  const acceptedOffersPercentage = calculatePercentage(stats.acceptedOffersCount, stats.totalOffersCount);
  const completedTradesPercentage = calculatePercentage(stats.completedTradesCount, stats.totalTradesCount);
  const activePostsPercentage = calculatePercentage(stats.activePostsCount, stats.totalPostsCount);

  return (
    <StyledBox p={4}>
      <Heading as="h1" mb={4} color="green">Indicadores SafeTrade</Heading>
      
      <FlexContainer>
        {renderPieChart('Percentual de Ofertas Aceitas', acceptedOffersPercentage)}
        {renderPieChart('Taxa de Trocas Concluídas', completedTradesPercentage)}
        {renderPieChart('Taxa de Postagens Ativas', activePostsPercentage)}
      </FlexContainer>

      <ResponsiveGrid>
        {renderBarChart('Usuários Criados', stats.usersCount, goals.usersGoal)}
        {renderBarChart('Mensagens Trocadas', stats.exchangesCount, goals.exchangesGoal)}
      </ResponsiveGrid>

      <ResponsiveGrid>
        {renderBarChart('Anúncios Criados', stats.adsCount, goals.adsGoal)}
        {renderBarChart('Parceiros', stats.partnersCount, goals.partnersGoal)}
      </ResponsiveGrid>

      <Text mt={4} fontSize="xl">Estatísticas Atuais:</Text>
      <Text>Usuários Criados: {stats.usersCount}</Text>
      <Text>Mensagens Trocadas: {stats.exchangesCount}</Text>
      <Text>Anúncios Criados: {stats.adsCount}</Text>
      <Text>Parceiros: {stats.partnersCount}</Text>
      <Text mt={4} fontSize="xl">Metas Estipuladas:</Text>
      <Text>Meta de Usuários: {goals.usersGoal}</Text>
      <Text>Meta de Mensagens Trocadas: {goals.exchangesGoal}</Text>
      <Text>Meta de Anúncios: {goals.adsGoal}</Text>
      <Text>Meta de Parceiros: {goals.partnersGoal}</Text>

      <StyledButton onClick={fetchStatistics}>Atualizar Estatísticas</StyledButton>

      <LegendContainer>
        <LegendItem>
          <LegendColorBox color="#00C853" />
          <LegendText>Atual</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColorBox color="#A5D6A7" />
          <LegendText>Resto</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendColorBox color="#03300B" />
          <LegendText>Meta</LegendText>
        </LegendItem>
      </LegendContainer>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #F5F5F5;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  background-color: green;
  color: white;

  &:hover {
    background-color: darkgreen;
  }
`;

const ResponsiveGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ChartContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const PercentageText = styled.p`
  margin-top: 5px;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const LegendColorBox = styled.div<{ color: string }>`
  width: 20px;
  height: 10px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`;

const LegendText = styled.p`
  font-size: 14px;
  margin: 0;
`;

export default StatisticsPage;
