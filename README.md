# spec.ts

Write tests for your types!

```ts
import { assert, _ } from "spec.ts";

// Assert two expressions have the same exact type
assert(foo, bar);

// Assert the exact type of an expression
assert(foo, _ as ExpectedType);
```

- [Usage with Jest](https://github.com/aleclarson/spec.ts/wiki/Usage-with-Jest)
