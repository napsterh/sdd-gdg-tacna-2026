# Tacna Trip — Workshop GDG Tacna

**Del Vibe Coding al SDD:** escribimos un spec, Antigravity lo implementa con Firebase Genkit y Gemini, y lo probamos en una página web viendo en Genkit qué valida y qué rechaza.

## Antes del workshop

Necesitas: Node 20 o superior, Git y Antigravity con sesión iniciada.

```bash
git clone https://github.com/napsterh/sdd-gdg-tacna-2026.git
cd sdd-gdg-tacna-2026
npm install
cp .env.example .env     # pega tu API key de Google AI Studio en .env
npm run check            # debe terminar en "Todo listo"
```

Crea tu API key en https://aistudio.google.com/apikey. Es personal: no la compartas ni la subas a GitHub (`.env` ya está ignorado).

## Si te pierdes

```bash
npm run paso
```

Te dice en qué paso vas y cuál sigue. Si te atrasas, el instructor publicará una rama de respaldo en esta página.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run check` | Verifica Node, API key y conexión con Gemini |
| `npm run paso` | Te dice en qué paso vas y cuál sigue |
| `npm run web` | Abre la página (http://localhost:3000) y la Dev UI de Genkit (http://localhost:4000) |
| `npm run typecheck` | Revisa los tipos de TypeScript |

## Cambiar el modelo

El modelo está en `src/ai.ts` (`MODELO`). Si tu cuenta no tiene acceso a ese modelo, cámbialo por otro de Gemini.
