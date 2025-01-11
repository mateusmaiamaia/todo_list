import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

let tasks = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find(route => route.method === method && route.path.test(url));

  if (route) {
    const routeParams = url.match(route.path);

    if (routeParams) {
      const { id, query, ...params } = routeParams.groups || {};

      req.params = { ...params, id };
      req.query = query || {};

      return route.handler(req, res, tasks);
    }
  }

  res.writeHead(404).end('Route not found');
});

server.listen(3333, () => {
  console.log('Server running at http://localhost:3333/');
});
