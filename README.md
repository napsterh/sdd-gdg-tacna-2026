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

## Guía del spec (workshop)

Sigue las slides: crea `spec.md` y ve añadiendo estos 5 bloques, en orden.

### Spec: qué hace y qué entra
Crea spec.md en la raíz del proyecto y escribe esto.

```markdown
# Tacna Trip

Recibe días e intereses y devuelve un itinerario usando solo los lugares de `lugares.json`.

## Entrada
- `dias`: número de 1 a 4.
- `intereses`: uno o más de `HISTORIA`, `GASTRONOMIA`, `NATURALEZA`, `COMPRAS`.
```

### Spec: qué sale
Añade al final de spec.md.

```markdown
## Salida
- `dias`: una lista con un elemento por día pedido.
  - `dia`: número.
  - `actividades`: lista de `{ lugar, momento, motivo }`, con `momento` = `MANANA` | `TARDE` | `NOCHE`.
- `consejo`: una frase útil.
```

### Spec: las reglas
Añade al final de spec.md.

```markdown
## Reglas
1. Solo lugares que existen en `lugares.json`.
2. Máximo 3 actividades por día.
3. Cada actividad coincide con un interés pedido.
4. Si la entrada no es válida, se rechaza sin llamar a Gemini.
```

### Spec: cómo se construye
Añade al final de spec.md.

```markdown
## Cómo se construye
- Un solo flow de Genkit llamado `tacnaTripFlow`, en `src/flow.ts`.
- Usa la instancia `ai` de `src/ai.ts`.
- Lee `lugares.json` y se lo da a Gemini como lista de lugares permitidos.
- Acepta cualquier número en `dias` y valida dentro del flow.
- Dos pasos con nombre, con `ai.run`: `validarEntrada` (antes de llamar a Gemini) y `validarReglas` (después).
```

### Spec: cómo se comprueba
Estas son las pruebas que haremos al final. Añádelas y guarda spec.md.

```markdown
## Criterios
- [ ] 2 días e HISTORIA: devuelve 2 días con lugares del catálogo.
- [ ] 5 días: se rechaza en `validarEntrada`, sin llamar a Gemini.
- [ ] Sin intereses: se rechaza en `validarEntrada`.
- [ ] Ningún día tiene más de 3 actividades.
```
