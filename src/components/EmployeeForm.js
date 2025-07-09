import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && department && designation) {
      onAdd({ name, department, designation });
      setName('');
      setDepartment('');
      setDesignation('');
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;