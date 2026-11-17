// Configuración de Genkit: plugin de Google AI (Gemini Developer API) y modelo por defecto.
// Ya viene hecha para que el workshop se concentre en el spec, el flow y la tool.
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

try {
  process.loadEnvFile('.env'); // carga GEMINI_API_KEY desde .env (Node >= 20.12)
} catch {
  // si no existe .env, se usa la variable de entorno del sistema
}

// Si este modelo no está disponible para tu cuenta, cámbialo aquí.
export const MODELO = 'gemini-3.8-flash';

export const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model(MODELO),
});
