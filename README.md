## Prerequisites
- Docker, Docker Compose [https://docs.docker.com/engine/install/ubuntu/]
- Git

## Running the app
1. Clone the repo
   ```sh
   git clone https://github.com/chuckk589/agrotech-back
   ```
   ```
   cd agrotech-back
   ```
2. Create `.env` file and update it with your own values (look at `.env.example` for reference)
   ```sh
   cp .env.example .env
   ```
3. Run the app
   ```sh
   docker-compose up -d --build
   ```

## Notes
- pgadmin available at `ip:5050`
- postgresql host for pgadmin: `postgresdb`
- `config` table must contain following values:
  - `name`: `theme`, `value`: `agrotechsim` or `droneverse`