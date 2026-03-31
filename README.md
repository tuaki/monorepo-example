## Installation

```bash
bun install
cp .env.example .env
```

## Development

- Run both commands in parallel:
```bash
bun run dev:frontend1
bun run dev:frontend2
```
- Open [frontend1](http://localhost:3031) and [frontend2](http://localhost:3032).

## Build

```bash
bun run build
```
- The build outputs will be located in `apps/frontend1/dist` and `apps/frontend2/dist`.