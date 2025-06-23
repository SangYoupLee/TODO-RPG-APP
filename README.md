# TODO-RPG-APP

This project contains a simple React frontend and a Spring Boot backend. The backend now exposes a small REST API using an in-memory H2 database.

## API Endpoints

- `POST /api/tasks` – create a new task. Body fields: `title`, `difficulty` (Easy/Medium/Hard), `type`.
- `GET /api/tasks` – list all incomplete tasks.
- `PUT /api/tasks/{id}` – mark a task as completed. Updates player XP and coins.
- `GET /api/status` – return the current player level, XP and coins.

CORS is enabled for all origins so the frontend can fetch data without issues.
