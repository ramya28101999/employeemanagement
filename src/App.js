import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import './index.css';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeTable employees={employees} onDelete={deleteEmployee} />
    </div>
  );
};

export default App;3