import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/homePage';
import TasksPage from './pages/TasksPage';
import EditTaskPage from './pages/editTaskPage';

// Componente de Layout Protegido (Apenas para Tasks e EditTaskPage)
const ProtectedLayout = () => {
  return (
    <div> {/* Aqui poderia estar um layout específico */}
      <Outlet /> {/* Renderiza as rotas internas */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal acessível diretamente */}
        <Route path="/" element={<HomePage />} />

        {/* Rotas protegidas sem LoginPage e RegisterPage */}
        <Route element={<ProtectedLayout />}>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Route>

        {/* Qualquer outra rota desconhecida redireciona para Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
