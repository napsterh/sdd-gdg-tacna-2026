# Guía de Tacna — Workshop GDG Tacna

**Del Vibe Coding al SDD:** construimos una API con Spec-Driven Development, Firebase Genkit, Gemini y Antigravity.

Recibe días e intereses y devuelve un itinerario por día usando **solo** los lugares de `lugares.json`.

## Antes del workshop

Necesitas: Node 20 o superior, Git y Antigravity con sesión iniciada.

```bash
git clone <URL-DEL-REPO>
cd guia-tacna-starter
npm install
cp .env.example .env     # pega tu API key de Google AI Studio en .env
npm run check            # debe terminar en "Todo listo"
```

Crea tu API key en https://aistudio.google.com/apikey. Es personal: no la compartas ni la subas a GitHub (`.env` ya está ignorado).

## Ramas (solo si te pierdes)

En el workshop construimos el proyecto paso a paso. Las otras ramas son respaldos: úsalas únicamente si te atrasas.

| Rama | Qué contiene |
|---|---|
| `step-0-start` | Punto de partida (esta rama): config de Genkit, catálogo, `spec-vaga.md` |
| `step-1-spec` | + `spec.md` |
| `step-2-backend` | + esquemas Zod, tool `buscarLugares` y `guiaTacnaFlow` |
| `step-3-tests` | + pruebas (`npm test`) |
| `final` | + reto: `NATURALEZA` y máximo 4 actividades |

Sin cambiar de rama, trae solo lo que te falta:

```bash
git checkout step-1-spec -- spec.md
git checkout step-2-backend -- src
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run check` | Verifica Node, API key y conexión con Gemini |
| `npm run genkit:ui` | Abre la Dev UI de Genkit en http://localhost:4000 |
| `npm test` | Ejecuta las pruebas |
| `npm run typecheck` | Revisa los tipos de TypeScript |

## Cambiar el modelo

El modelo está en `src/ai.ts` (`MODELO`). Si tu cuenta no tiene acceso a ese modelo, cámbialo por otro de Gemini.
