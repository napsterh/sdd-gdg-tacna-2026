// Página web de la Guía de Tacna. Ejecuta: npm run web
// -> página en http://localhost:3000 y Dev UI de Genkit en http://localhost:4000
import { readFileSync } from 'node:fs';
import { createServer, type IncomingMessage } from 'node:http';
import './ai.js';

const PUERTO = Number(process.env.PORT ?? 3000);
const pagina = () => readFileSync(new URL('../public/index.html', import.meta.url), 'utf8');

const leerJson = async (req: IncomingMessage) => {
  let cuerpo = '';
  for await (const trozo of req) cuerpo += trozo;
  return JSON.parse(cuerpo || '{}');
};

// El flow se carga al primer pedido: así la página abre aunque src/flow.ts aún no exista.
const cargarFlow = async () => {
  const ruta = './flow.js';
  try {
    return (await import(ruta)).guiaTacnaFlow;
  } catch (e) {
    if ((e as { code?: string }).code === 'ERR_MODULE_NOT_FOUND' && String(e).includes('flow')) return null;
    throw e;
  }
};

createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(pagina());
    return;
  }
  if (req.method === 'POST' && req.url === '/api/guia') {
    try {
      const flow = await cargarFlow();
      if (!flow) {
        res.writeHead(503, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Aún no existe src/flow.ts. Impleméntalo con Antigravity a partir de spec.md.' }));
        return;
      }
      const resultado = await flow(await leerJson(req));
      res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(resultado));
    } catch (e) {
      const mensaje = e instanceof Error ? e.message : String(e);
      res.writeHead(400, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: mensaje }));
    }
    return;
  }
  res.writeHead(404).end('No encontrado');
}).listen(PUERTO, () => console.log(`Guía de Tacna en http://localhost:${PUERTO}`));
