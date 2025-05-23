// src/App.jsx
import React from 'react';
import GlobalLayout from './layouts/GlobalLayout';
import MainRouter from './navigation/MainRouter';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <MainRouter />
        <Footer />
      </GlobalLayout>
    </BrowserRouter>
    );
}

export default App;
