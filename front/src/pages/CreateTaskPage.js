import React, { useState } from 'react';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleCreateTask = async (e) => {
    e.preventDefault();

    // Verificar se o título e a descrição não estão vazios
    if (!title || !description) {
      setError('Title and description are required');
      return;
    }

    // Criar o objeto de tarefa
    const newTask = { title, description };

    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();

      if (response.ok) {
        // Se a resposta for ok, você pode lidar com os dados aqui (ex: mostrar uma mensagem de sucesso)
        console.log('Task created:', data);
        setTitle('');
        setDescription('');
      } else {
        // Exibir erro de criação
        setError(data.error || 'Failed to create task');
      }
    } catch (err) {
      // Erro de rede ou outro
      setError('An error occurred while creating the task');
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleCreateTask}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
