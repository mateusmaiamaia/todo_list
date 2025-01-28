import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

let tasks = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // Aplica o middleware apenas em métodos que possuem corpo (POST, PUT)
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    await json(req, res); // Apenas parseia corpo de requisições que esperam corpo
  }

  // Busca a rota correspondente
  const route = routes.find(route => route.method === method && route.path.test(url));

  if (route) {
    const routeParams = url.match(route.path);

    if (routeParams) {
      const { id, query, ...params } = routeParams.groups || {};

      req.params = { ...params, id };
      req.query = query || {};

      try {
        // Chama o handler da rota
        await route.handler(req, res, tasks);
      } catch (error) {
        // Trata erro interno
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    }
  } else {
    // Caso não encontre a rota
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3333, () => {
  console.log('Server running at http://localhost:3333/');
});
