# "Benchmark" of Vanilla Extract w/ Mantine

## Running the project

For a more accurate "benchmark", rerun the server instead of letting it hot reload.

```bash
pnpm dev
```

Comment/uncomment the imports in `main.tsx` to test

```ts
import { KitchenSink } from "./cssmod/KitchenSink";
import { KitchenSink } from "./ve-mantine-theme/KitchenSink";
import { KitchenSink } from "./ve-vanilla-theme/KitchenSink";
```

## Generating components

> You'll have to delete the existing folders first.

```bash
# Creates 100 components using vanilla extract
# styles reference theme.css.ts
node genve

# Creates 100 components using vanilla extract
# styles reference theme.ts, which uses Mantine theme
node genve

# Creates 100 components using css modules
# styles reference the :root css variables declared in index.css
node gencssmod
```
