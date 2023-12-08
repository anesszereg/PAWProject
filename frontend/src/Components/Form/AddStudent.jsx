// AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import the CSS file for styling

const AddStudent = () => {
  const [student, setStudent] = useState({});

  const handleAddStudent = async () => {
    try {
      await axios.post('http://localhost:5000/api/students', student);
      // You might want to update the state or perform other actions after adding a student
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            value={student.name || ''}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={student.firstname || ''}
            onChange={(e) => setStudent({ ...student, firstname: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={student.email || ''}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
        </label>
        <button type="button" onClick={handleAddStudent}>
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
