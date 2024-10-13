import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {isAuthenticated && <Sidebar onLogout={handleLogout} />}
        <div className="flex-1 p-10">
          <Routes>
            <Route path="/login" element={
              isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            } />
            <Route path="/" element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            } />
            <Route path="/employees" element={
              isAuthenticated ? <EmployeeList /> : <Navigate to="/login" />
            } />
            <Route path="/employees/new" element={
              isAuthenticated ? <EmployeeForm /> : <Navigate to="/login" />
            } />
            <Route path="/employees/:id" element={
              isAuthenticated ? <EmployeeDetails /> : <Navigate to="/login" />
            } />
            <Route path="/employees/:id/edit" element={
              isAuthenticated ? <EmployeeForm /> : <Navigate to="/login" />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;