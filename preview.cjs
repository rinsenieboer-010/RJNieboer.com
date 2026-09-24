const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.webp':'image/webp', '.svg':'image/svg+xml', '.pdf':'application/pdf' };
http.createServer((request, response) => {
  let name;
  try { name = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400).end(); return; }
  if (name === '/') name = '/index.html';
  if (name === '/about' || name === '/projects') name += '.html';
  const file = path.resolve(root, '.' + name);
  if (!file.startsWith(root + path.sep) || name.startsWith('/.git') || name.startsWith('/api/')) {
    response.writeHead(403).end(); return;
  }
  fs.readFile(file, (error, data) => {
    if (error) { response.writeHead(404).end(); return; }
    response.writeHead(200, { 'Content-Type':types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' });
    response.end(data);
  });
}).listen(4173, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4173'));
