import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppRoutes } from './Routes';

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};