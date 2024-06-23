import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './components/hero.component';
import UserPage from './pages/user';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { AnunciosPage } from './pages/anuncios';
import { AccountPage } from './pages/account';
import { ComoFuncionaPage } from './pages/comoFunciona';
import TrocasPage from './pages/troca';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      
        <HeroSection />
      
    ),
  },
  {
    path: '/user',
    element: (
      
        <UserPage />
      
    ),
  },
  {
    path: '/anuncios',
    element: (
      
        <AnunciosPage />
      
    ),
  },
  {
    path: '/login',
    element: (
    
        <LoginPage />
      
    ),
  },
  {
    path: '/register',
    element: (
     
        <RegisterPage />
      
    ),
  },
  {
    path: '/account',
    element: (
    
        <AccountPage />
     
    ),
  },
  {
    path: '/comoFunciona',
    element: (
     
        <ComoFuncionaPage />
     
    ),
  },
  {
    path: '/trocas',
    element: (
     
        <TrocasPage />
      
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
