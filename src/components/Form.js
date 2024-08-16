import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Keep track of the task being edited

  const handleSubmit = () => {
    if (input) {
      if (editIndex !== null) {
        // Update the task at the edit index
        const updatedTasks = tasks.map((task, index) => (index === editIndex ? input : task));
        setTasks(updatedTasks);
        setEditIndex(null); // Reset edit index
      } else {
        // Add a new task
        setTasks([...tasks, input]);
      }
      setInput(''); // Clear the input after submission
    }
  };

  // Delete function to remove a task
  const deleteTasks = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  // Edit function to set the input and edit index
  const editTask = (index) => {
    setInput(tasks[index]); // edited
    setEditIndex(index);
  };

  return (
    <div className='container' style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h3 className='text-center py-3' style={{ color: '#333' }}>Todo App</h3>
      <div className='d-flex justify-content-between'>
        <input
          type='text'
          className='form-control input'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add a task...'
          style={{ borderColor: '#ccc', backgroundColor: '#fff' }}
          value={input}
        />
        <button
          type='button' // Changed to 'button' to prevent form submission
          className='btn btn-light'
          onClick={handleSubmit}
          style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
        >
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div className='d-flex justify-content-between '  key={index}>
            <div
              className='alert alert-info'
              style={{ backgroundColor: '#d1ecf1', borderColor: '#bee5eb', color: '#0c5460', marginTop: '10px' }}
            >
              {task}
            </div>
            <div >
            <button
              className='ms-auto btn btn-warning mx-2' // Changed to warning color for edit
              onClick={() => editTask(index)} // Call edit function
              style={{ marginTop: '10px' }}
            >
              Edit
            </button>
            <button
              className='ms-auto btn btn-danger'
              onClick={() => deleteTasks(task)}
              style={{ marginTop: '10px' }}
            >
              Delete
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;