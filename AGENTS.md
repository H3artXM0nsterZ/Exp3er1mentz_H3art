# Base44 Dev Environment

## Project Overview
Static HTML/CSS/JS visual novel — "Exp3er1mentz H3art", a pink yandere visual novel with pixel-art characters rendered from code (canvas, no image files). No build step, no framework, no backend, no dependencies.

## File Structure
- `index.html` — HTML structure, loads CSS and JS
- `style.css` — all styling (pink yandere theme, lab, office, computer UI, dialogue)
- `sprites.js` — pixel art sprite data (16x32 grids) and canvas rendering function
- `story.js` — branching story data (all scenes, choices, endings)
- `game.js` — game logic (scene management, typewriter, effects, computer/email interaction)

## Setup
- The app is served by nginx via `docker-compose.base44.yml`.
- `docker compose -f docker-compose.base44.yml up -d` starts nginx on host port 3000.
- All 5 files are bind-mounted into nginx; edits are reflected immediately on browser refresh.

## Verification
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return `200`.
- The page shows a glitch-animated title screen with a START button.
- Starting the game shows the office scene, then the lab with pixel-art characters.

## Notes
- Characters are 16x32 pixel sprites rendered on canvas at 4x scale (3x on mobile).
- The game features: typewriter dialogue, screen shake, fade transitions, interactive computer file-browsing, email popup, hospital bed, and branching choices with multiple endings.
- No secrets or external services required.
