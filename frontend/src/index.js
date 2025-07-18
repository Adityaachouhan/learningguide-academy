// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
