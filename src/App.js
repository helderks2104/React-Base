import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle, { Container } from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import history from './services/history';

export default function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}
