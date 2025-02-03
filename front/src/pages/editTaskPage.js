import React, { useState } from 'react';

const EditTaskPage = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as alterações da tarefa
    console.log('Task Title:', taskTitle);
    console.log('Task Description:', taskDescription);
    console.log('Due Date:', dueDate);
  };

  return (
    <div className="bg-gray-100 font-roboto flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-6">
          <img
            alt="Placeholder for company logo"
            className="w-32 h-auto mx-auto"
            src="https://placehold.co/200x100?text=Logo"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="task-title"
            >
              Task Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-title"
              placeholder="Enter task title"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="task-description"
            >
              Task Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task-description"
              placeholder="Enter task description"
              rows="4"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="due-date"
            >
              Due Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" // Mudado para submit
            >
              Save Changes
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskPage;