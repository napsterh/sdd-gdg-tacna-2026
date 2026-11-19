// Dice en qué paso del workshop vas, según los archivos que existen. No llama a Gemini.
import { existsSync, readFileSync } from 'node:fs';

const hay = (ruta: string) => existsSync(ruta);

let envOk = Boolean(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY);
try {
  envOk = envOk || /GEMINI_API_KEY=\S+/.test(readFileSync('.env', 'utf8'));
} catch {}

const pasos = [
  { nombre: 'Preparación (instalar y API key)', hecho: hay('node_modules') && envOk, falta: 'npm install, y pega tu API key en .env' },
  { nombre: 'Spec (spec.md)', hecho: hay('spec.md'), falta: 'escribe spec.md en la raíz del proyecto' },
  { nombre: 'Flow (src/flow.ts)', hecho: hay('src/flow.ts'), falta: 'pide a Antigravity que implemente spec.md' },
];

let siguiente: string | null = null;
for (const p of pasos) {
  console.log(`${p.hecho ? '✓' : '✗'} ${p.nombre}`);
  if (!p.hecho && !siguiente) siguiente = p.falta;
}
console.log(siguiente ? `\nSiguiente: ${siguiente}.` : '\nListo: abre la página con npm run web.');
