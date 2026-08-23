import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'out');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

if (!existsSync(root)) {
  console.error('The out folder does not exist. Run: npm run build');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const cleanUrl = decodeURIComponent((req.url || '/').split('?')[0]);
  let requested = normalize(cleanUrl).replace(/^(\.\.[/\\])+/, '');
  let filePath = join(root, requested);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  } else if (!existsSync(filePath) && !extname(filePath)) {
    const htmlPath = `${filePath}.html`;
    const indexPath = join(filePath, 'index.html');
    if (existsSync(indexPath)) filePath = indexPath;
    else if (existsSync(htmlPath)) filePath = htmlPath;
  }

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const type = types[extname(filePath).toLowerCase()] || 'application/octet-stream';
  const cache = /\.(webp|png|jpe?g|svg|ico|css|js)$/.test(filePath)
    ? 'public, max-age=31536000, immutable'
    : 'no-cache';
  res.writeHead(200, {
    'Content-Type': type,
    'Cache-Control': cache,
    'X-Content-Type-Options': 'nosniff',
  });
  createReadStream(filePath).pipe(res);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Production preview: http://localhost:${port}`);
});
