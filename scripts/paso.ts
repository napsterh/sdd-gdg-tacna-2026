// Dice en qué paso del workshop vas, según los archivos que existen. No llama a Gemini.
import { existsSync, readFileSync } from 'node:fs';

const hay = (ruta: string) => existsSync(ruta);
const tiene = (ruta: string, texto: string) => hay(ruta) && readFileSync(ruta, 'utf8').includes(texto);

let envOk = Boolean(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY);
try {
  envOk = envOk || /GEMINI_API_KEY=\S+/.test(readFileSync('.env', 'utf8'));
} catch {}

const pasos: { nombre: string; hecho: boolean; falta: string }[] = [
  { nombre: 'Preparación (instalar y API key)', hecho: hay('node_modules') && envOk, falta: 'npm install, y pega tu API key en .env' },
  { nombre: 'Spec (spec.md)', hecho: hay('spec.md'), falta: 'trae spec.md y colócalo en la raíz del proyecto' },
  { nombre: 'Esquemas Zod', hecho: hay('src/schemas.ts') && hay('src/lugares.ts'), falta: 'pide a Antigravity src/lugares.ts y src/schemas.ts' },
  { nombre: 'Tool buscarLugares', hecho: hay('src/tools.ts'), falta: 'pide a Antigravity src/tools.ts' },
  { nombre: 'Flow guiaTacnaFlow', hecho: hay('src/flow.ts') && hay('src/reglas.ts'), falta: 'pide a Antigravity src/flow.ts y src/reglas.ts' },
  { nombre: 'Pruebas', hecho: hay('test/guia.test.ts'), falta: 'pide a Antigravity las pruebas (npm test)' },
  { nombre: 'Reto (NATURALEZA)', hecho: tiene('spec.md', 'NATURALEZA'), falta: 'cambia spec.md y pide actualizar código y pruebas' },
];

let siguiente: string | null = null;
for (const p of pasos) {
  console.log(`${p.hecho ? '✓' : '✗'} ${p.nombre}`);
  if (!p.hecho && !siguiente) siguiente = p.falta;
}
console.log(siguiente ? `\nSiguiente: ${siguiente}.` : '\nCompletaste todos los pasos.');
