import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Productos from './paginas/Productos';
import Login from './paginas/Login';
import Inventario from './paginas/Inventario';
import Ventas from './paginas/Ventas';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/" element={<Navigate to="/productos" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;