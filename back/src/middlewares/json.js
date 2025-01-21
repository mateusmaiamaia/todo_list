export async function json(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    // Tenta fazer o parse do JSON
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    // Caso o JSON seja inválido, responde com um erro 400
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid JSON' }));
    return;  // Não segue adiante se o JSON for inválido
  }

  // Só define o header se a requisição for válida
  res.setHeader('Content-type', 'application/json');
}
