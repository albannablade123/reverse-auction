# Repository Guidelines

## Project Structure & Module Organization
- `api-gateway/`, `discovery-server/`: Spring Cloud gateway and Eureka service registry.
- `product-service/`, `bid-service/`, `cart-service/`, `user-service/`, `notification-service/`: Spring Boot microservices (Java 17). Source is under `src/main/java`, configs in `src/main/resources/application.properties`, tests in `src/test/java`.
- `reverse-auction-frontend/`: Next.js (app router) UI. Source in `src/app`, shared UI components in `src/app/ui` and `src/app/components`, assets in `public/`.
- `docker-compose.yml`, `docker-compose-local.yml`: multi-service local orchestration.

## Build, Test, and Development Commands
- `mvn clean package`: build all backend modules from the repo root.
- `mvn -pl <module> spring-boot:run`: run a single service (example: `mvn -pl product-service spring-boot:run`).
- `mvn test` or `mvn -pl <module> test`: run backend tests.
- `cd reverse-auction-frontend && npm run dev`: run the frontend on http://localhost:3000.
- `cd reverse-auction-frontend && npm run build` / `npm run start`: build and serve the production frontend.
- `cd reverse-auction-frontend && npm run lint`: run Next.js ESLint.
- `docker compose -f docker-compose-local.yml up`: start local dependencies and services.

## Coding Style & Naming Conventions
- Java: 4-space indentation, standard Spring Boot package structure under `com.reverseauction` or `com.hasan`.
- TypeScript/TSX: 2-space indentation, double quotes, components in PascalCase (example: `ProductCard.tsx`).
- Keep DTOs under `dto/`, controllers under `controller/`, and services under `service/`.

## Testing Guidelines
- Backend tests live in `*/src/test/java` and use Spring Boot test conventions.
- Name tests with `*Test.java` or `*ApplicationTests.java` to align with Maven Surefire defaults.
- Frontend has no test harness configured; keep changes small and verify UI manually.

## Commit & Pull Request Guidelines
- Commit history favors short, descriptive messages; prefixes like `chore:` appear but are optional.
- Use imperative phrasing and include scope when helpful (example: `Fix pagination logic`).
- PRs should include: a clear description, testing notes (commands run), linked issues if applicable, and screenshots for UI changes.

## Configuration & Security Tips
- Local configs live in `application.properties`; avoid committing secrets.
- Keycloak realm exports live under `realms/`; keep changes minimal and documented.
