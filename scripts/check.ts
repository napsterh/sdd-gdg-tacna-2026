// Verifica el entorno antes del workshop: Node, API key y respuesta de Gemini.
import { ai, MODELO } from '../src/ai.js';

const [major] = process.versions.node.split('.').map(Number);
if (major < 20) {
  console.error(`✗ Node ${process.versions.node}: se necesita Node 20 o superior`);
  process.exit(1);
}
console.log(`✓ Node ${process.versions.node}`);

if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
  console.error('✗ Falta GEMINI_API_KEY. Copia .env.example a .env y pega tu key.');
  process.exit(1);
}
console.log('✓ API key encontrada');

try {
  const { text } = await ai.generate({ prompt: 'Responde solo con la palabra: ok' });
  console.log(`✓ Gemini (${MODELO}) respondió: ${text.trim()}`);
  console.log('\nTodo listo para el workshop.');
} catch (e) {
  console.error('✗ No se pudo llamar a Gemini:', e instanceof Error ? e.message : e);
  process.exit(1);
}
