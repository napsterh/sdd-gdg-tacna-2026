# Guía de Tacna — Workshop GDG Tacna

**Del Vibe Coding al SDD:** construimos una API con Spec-Driven Development, Firebase Genkit, Gemini y Antigravity.

Recibe días e intereses y devuelve un itinerario por día usando **solo** los lugares de `lugares.json`.

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

Durante el workshop construimos el proyecto paso a paso. Si te atrasas, el instructor publicará una rama de respaldo en esta página cuando llegue a cada etapa. Para saber en qué paso vas:

```bash
npm run paso
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run check` | Verifica Node, API key y conexión con Gemini |
| `npm run paso` | Te dice en qué paso vas y cuál sigue |
| `npm run genkit:ui` | Abre la Dev UI de Genkit en http://localhost:4000 |
| `npm test` | Ejecuta las pruebas |
| `npm run typecheck` | Revisa los tipos de TypeScript |

## Cambiar el modelo

El modelo está en `src/ai.ts` (`MODELO`). Si tu cuenta no tiene acceso a ese modelo, cámbialo por otro de Gemini.
