import React, { useState } from "react";

const HomePage = () => {
  const [userName, setUserName] = useState("User Name");
  const [isEditing, setIsEditing] = useState(false);

  const tasks = [
    { title: "Task 1", due: "2023-10-01" },
    { title: "Task 2", due: "2023-10-05" },
    { title: "Task 3", due: "2023-10-10" },
    { title: "Task 4", due: "2023-10-15" },
    { title: "Task 5", due: "2023-10-20" },
  ];

  const handleEditName = () => setIsEditing(true);
  const handleNameChange = (e) => setUserName(e.target.value);
  const handleNameBlur = () => setIsEditing(false);

  return (
    <div className="bg-gray-100 font-roboto h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 h-screen bg-white shadow-lg p-4 border-r border-gray-300">
        <div className="mb-4">
          <img
            alt="Logo"
            className="w-full h-auto"
            src="https://placehold.co/200x100?text=Logo"
          />
        </div>

        {/* User Info */}
        <div className="mb-4 text-center">
          <img
            alt="User Photo"
            className="w-24 h-24 rounded-full mx-auto border border-gray-300"
            src="https://placehold.co/100x100?text=User+Photo"
          />
          <div className="text-2xl font-semibold mt-2 flex items-center justify-center">
            {isEditing ? (
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                className="border rounded p-1 text-center"
                autoFocus
              />
            ) : (
              <>
                {userName}
                <button
                  className="ml-2 text-blue-500 hover:text-blue-700"
                  onClick={handleEditName}
                >
                  <i className="fas fa-edit"></i>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Menu */}
        <ul className="text-center">
          <li className="mb-2">
            <a className="text-blue-500 hover:text-blue-700" href="#">Option 1</a>
          </li>
          <li className="mb-2">
            <a className="text-blue-500 hover:text-blue-700" href="#">Option 2</a>
          </li>
          <li className="mb-2">
            <a className="text-blue-500 hover:text-blue-700" href="#">Option 3</a>
          </li>
          <li className="mb-2">
            <a className="text-blue-500 hover:text-blue-700" href="#">Option 4</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white shadow-lg p-6 ml-4 border border-gray-300">
        <h1 className="text-3xl font-bold mb-4">Task List and Calendar</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Task List */}
          <section className="bg-gray-50 shadow-md rounded-lg p-4 border border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Task List</h2>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 border-b last:border-none"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-500">Due: {task.due}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <i className="fas fa-trash"></i>
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <i className="fas fa-check"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Calendar */}
          <section className="bg-gray-50 shadow-md rounded-lg p-4 border border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">Calendar</h2>
            <div>
              <img
                alt="Calendar"
                className="w-full h-auto"
                src="https://placehold.co/400x400?text=Calendar+Image"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
