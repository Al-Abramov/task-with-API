import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Logout } from './pages/Logout';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="company/:id"
          element={
            <RequireAuth>
              <CompanyPage />
            </RequireAuth>
          }
        />
        <Route
          path="exit"
          element={
            <RequireAuth>
              <Logout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
