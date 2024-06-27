import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import WithNavbar from './components/layout'; 
import { AnunciosPage } from './pages/anuncios';
import AccountPage from './pages/account';
import { ComoFuncionaPage } from './pages/comoFunciona';
import TrocasPage from './pages/troca';
import StatisticsPage from './pages/StatisticsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <WithNavbar>
        <HomePage />
      </WithNavbar>
    ),
  },
  {
    path: '/anuncios',
    element: (
      <WithNavbar>
        <AnunciosPage />
      </WithNavbar>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/account',
    element: (
      <WithNavbar>
        <AccountPage />
      </WithNavbar>
    ),
  },
  {
    path: '/comoFunciona',
    element: (
      <WithNavbar>
        <ComoFuncionaPage />
      </WithNavbar>
    ),
  },
  {
    path: '/trocas',
    element: (
      <WithNavbar>
        <TrocasPage />
      </WithNavbar>
    ),
  },
  {
    path: '/indicadores',
    element: (
      <WithNavbar>
        <StatisticsPage />
      </WithNavbar>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
