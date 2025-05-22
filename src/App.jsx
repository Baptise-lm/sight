// src/App.jsx
import React from 'react';
import GlobalLayout from './layouts/GlobalLayout';
import MainRouter from './navigation/MainRouter';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <MainRouter />
      </GlobalLayout>
    </BrowserRouter>
    );
}

export default App;
