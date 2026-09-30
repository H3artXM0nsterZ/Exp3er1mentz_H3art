# Base44 Dev Environment

## Project Overview
Static HTML/CSS/JS page — "Exp3er1mentz H3art", a pixel-art heart experiment. No build step, no framework, no backend, no dependencies.

## Setup
- The app is a single `index.html` file served by nginx via `docker-compose.base44.yml`.
- `docker compose -f docker-compose.base44.yml up -d` starts nginx on host port 3000.
- Edits to `index.html` are reflected immediately on browser refresh (nginx serves the bind-mounted file from disk).

## Verification
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return `200`.
- The page shows a glitch-animated title screen with a START button that reveals a CSS pixel-art heart.

## Notes
- The original repo contained two files: `Haha` (the truncated HTML source) and `Run` (a directory tree listing showing `exp3er1mentz-heart └── index.html`). The `Haha` content was used to create `index.html`, completing the truncated CSS/HTML.
- No secrets or external services required.
