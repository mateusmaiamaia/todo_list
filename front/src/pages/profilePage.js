import React, { useState } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as alterações do perfil
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password!== confirmPassword) {
        alert("As senhas não conferem.")
    } else {
        // Aqui você pode adicionar a lógica para salvar as alterações do perfil
        console.log('Name:', name);
        console.log('Password:', password);
    }
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
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <img
              alt="Placeholder for user photo"
              className="w-24 h-24 rounded-full mx-auto mb-2"
              src="https://placehold.co/100x100?text=User+Photo"
            />
            <h3 className="text-xl font-semibold mt-2">User Name</h3>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              placeholder="Confirm your password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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

export default ProfilePage;