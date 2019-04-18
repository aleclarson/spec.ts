# spec.ts

[![npm](https://img.shields.io/npm/v/spec.ts.svg)](https://www.npmjs.com/package/spec.ts) [![Build Status](https://travis-ci.org/aleclarson/spec.ts.svg?branch=master)](https://travis-ci.org/aleclarson/spec.ts)

Write tests for your types!

```ts
import { assert, _ } from "spec.ts";

// Assert two expressions have the same exact type
assert(foo, bar);

// Assert the exact type of an expression
assert(foo, _ as ExpectedType);
```

- [Usage from CLI](https://github.com/aleclarson/spec.ts/wiki/Usage-from-CLI)
- [Usage with Jest](https://github.com/aleclarson/spec.ts/wiki/Usage-with-Jest)
