import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="page" element={<CompanyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;