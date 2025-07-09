import React from 'react';
import './EmployeeTable.css';

const EmployeeTable = ({ employees, onDelete }) => {
  return (
    <div className="employee-table">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;