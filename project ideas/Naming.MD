# Naming Conventions

This document defines consistent naming rules to be used across the project to improve readability, discoverability and maintainability.

## Principles

- Be descriptive and unambiguous.
- Prefer readability over brevity.
- Use consistent casing and separators across the same kind of entity.
- Keep names stable; avoid frequent renames.
- Use English.

## File & Directory Names

- Use kebab-case for files and folders: `feature-name.md`, `user-service/`.
- Use `.md` for Markdown, lower-case extensions.
- Use nouns for directories and descriptive names for files.
- Use `index` for default folder entry: `components/button/index.tsx`.

Example:

```text
docs/getting-started.md
src/components/button/index.tsx
src/pages/user-profile.tsx
```

## Source Code (general)

- Follow language-specific idioms where they exist.
- Prefer PascalCase for types/classes, camelCase for variables/functions, UPPER_SNAKE_CASE for constants.

## Variables & Functions

- camelCase for variables and functions: `userCount`, `fetchUser()`.
- Use verbs for functions: `calculateTotal()`, `sendEmail()`.

## Classes, Types, Interfaces, Enums

- PascalCase for classes, types, interfaces and enums: `UserService`, `OrderItem`, `PaymentMethod`.
- Prefix interfaces only when helpful (avoid the `I` prefix unless team prefers it).

## Constants

- UPPER_SNAKE_CASE for compile-time or global constants: `DEFAULT_TIMEOUT`, `MAX_RETRIES`.
- Module-level constants may use camelCase if they are implementation details.

## React Components / UI

- PascalCase for components: `UserCard`, `LoginForm`.
- Files containing a single component should match the component name: `UserCard.tsx`.

## Tests

- Use the same name as the tested unit with `.spec` or `.test`: `user-service.spec.ts`, `UserCard.test.tsx`.
- Place next to implementation when co-located or under `__tests__` as preferred.

## Configuration & Environment

- Use descriptive kebab-case or dot notation for config files: `app.config.json`, `.env.local`.
- Environment variables UPPER_SNAKE_CASE: `DATABASE_URL`, `NODE_ENV`.

## Database & API

- Use snake_case or camelCase consistently depending on DB conventions; map to code style at boundaries.
- REST endpoints kebab-case or snake_case: `/user-profiles`, `/auth/login`.
- GraphQL types PascalCase; fields camelCase.

## Git Branches & Commits

- Branches: use kebab-case with type prefix: `feature/add-login`, `fix/session-timeout`.
- Commit messages: follow imperative style and include scope: `feat(auth): add OAuth2 support`.

## Versioning

- Follow Semantic Versioning: MAJOR.MINOR.PATCH (e.g., `1.2.0`).

## Abbreviations & Acronyms

- Avoid abbreviations unless widely recognized.
- Treat acronyms as words: `HttpClient` (PascalCase) or `httpClient` (camelCase), not `HTTPClient` unless preferred consistently.

## Examples Summary

```ts
// class
class OrderService {}

// variable/function
const userCount = 3;
function fetchUser(id: string) {}

// constant
const MAX_RETRIES = 5;

// file structure
src / services / order - service.ts;
components / OrderCard / index.tsx;
OrderCard.test.tsx;
```

Adopt these rules consistently; update this document if project needs evolve.
