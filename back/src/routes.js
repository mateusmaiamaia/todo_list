import { v4 as uuidv4 } from 'uuid';

export const routes = [
  {
    method: 'GET',
    path: /^\/tasks$/,
    handler: (req, res, tasks) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(tasks));  // Garante que a resposta é enviada e o fluxo é interrompido
    },
  },
  {
    method: 'POST',
    path: /^\/tasks$/,
    handler: async (req, res, tasks) => {
      const { title, description } = req.body;

      if (!title || !description) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Title and description are required' }));
      }

      const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        created_at: new Date(),
        updated_at: new Date(),
      };

      tasks.push(newTask);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(newTask));  // Garante que a resposta é enviada e o fluxo é interrompido
    },
  },
  {
    method: 'PUT',
    path: /^\/tasks\/(?<id>[a-f0-9\-]+)$/,
    handler: async (req, res, tasks) => {
      const { id } = req.params;
      const { title, description } = req.body;

      const taskIndex = tasks.findIndex(task => task.id === id);

      if (taskIndex === -1) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Task not found' }));
      }

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        updated_at: new Date(),
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(tasks[taskIndex]));  // Garante que a resposta é enviada e o fluxo é interrompido
    },
  },
  {
    method: 'DELETE',
    path: /^\/tasks\/(?<id>[a-f0-9\-]+)$/,
    handler: (req, res, tasks) => {
      const { id } = req.params;

      const taskIndex = tasks.findIndex(task => task.id === id);

      if (taskIndex === -1) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Task not found' }));
      }

      tasks.splice(taskIndex, 1);

      res.writeHead(204).end();  // Garante que a resposta é enviada e o fluxo é interrompido
    },
  },
  {
    method: 'PATCH',
    path: /^\/tasks\/(?<id>[a-f0-9\-]+)\/complete$/,
    handler: (req, res, tasks) => {
      const { id } = req.params;

      const taskIndex = tasks.findIndex(task => task.id === id);

      if (taskIndex === -1) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Task not found' }));
      }

      tasks[taskIndex].completed = true;
      tasks[taskIndex].updated_at = new Date();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(tasks[taskIndex]));  // Garante que a resposta é enviada e o fluxo é interrompido
    },
  },
];
