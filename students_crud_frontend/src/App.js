import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowForm(true);
  };

  const handleSave = () => {
    setSelectedStudent(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setSelectedStudent(null);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Student Management</h1>
      {showForm ? (
        <StudentForm
          selectedStudent={selectedStudent}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Add Student</button>
          <StudentList onEdit={handleEdit} />
        </>
      )}
    </div>
  );
}

export default App;