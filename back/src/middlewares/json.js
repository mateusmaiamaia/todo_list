export const json = (req, res) => {
  return new Promise((resolve, reject) => {
    // Verifica se o método da requisição é um dos que geralmente possuem corpo (POST, PUT, PATCH)
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      let data = '';

      req.on('data', chunk => {
        data += chunk;
      });

      req.on('end', () => {
        // Se houver corpo, tenta fazer o parse do JSON
        if (data) {
          try {
            req.body = JSON.parse(data);
          } catch (error) {
            // Caso o JSON seja inválido
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON' }));
            return reject(error);
          }
        } else {
          // Se não houver dados, simplesmente define como um objeto vazio
          req.body = {};
        }
        resolve();
      });

      req.on('error', (error) => {
        // Se ocorrer algum erro na requisição
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        reject(error);
      });
    } else {
      // Se não for um método que requer corpo, apenas resolve sem alterar nada
      req.body = {};
      resolve();
    }
  });
};
