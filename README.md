# DMT Site

Full-stack starter project: **React** (Vite) frontend, **Express** backend, **MySQL** database via **Sequelize** ORM.

## Structure

```
client/   React app (Vite dev server on http://localhost:5173)
server/   Express API (http://localhost:5000)
```

## Setup

1. Install dependencies:
   ```
   npm run install:all
   ```

2. Create the MySQL database (tables are created automatically by Sequelize on server start):
   ```
   mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS dmt_db;"
   ```

3. Configure the backend environment:
   ```
   copy server\.env.example server\.env
   ```
   Then edit `server/.env` with your MySQL credentials.

4. Run both client and server together:
   ```
   npm run dev
   ```
   Or individually:
   ```
   npm run dev:server
   npm run dev:client
   ```

The client dev server proxies `/api` requests to the Express server, so no CORS setup is needed in development.

## Database (Sequelize)

- ORM: [Sequelize](https://sequelize.org/) with the `mysql2` driver.
- Models live in `server/src/models/`. On startup, `sequelize.sync()` automatically
  creates any tables that don't exist yet based on the model definitions.
- To change the schema, edit the model and restart the server.

## API

- `GET /api/health` — health check
- `GET /api/items` — list items
- `POST /api/items` — create item (`{ name, description }`)

