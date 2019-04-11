# spec.ts

Write tests for your types!

```ts
import { assert, _ } from "spec.ts";

// Assert two expressions have the same exact type
assert(foo, bar);

// Assert the exact type of an expression
assert(foo, _ as ExpectedType);
```

&nbsp;

## Usage with [Jest](https://github.com/facebook/jest)

If you want to write tests for expected compiler errors, I can tell you one way
to do it with Jest.

1. Give your tests their own `.ts` module(s)

2. Install `jest` and [`execa`](https://github.com/sindresorhus/execa)

3. Add your test modules to [`jest.testPathIgnorePatterns`](https://jestjs.io/docs/en/configuration#testpathignorepatterns-array-string) in your `package.json`

4. Create a test module that isn't ignored by the previous step. Then use inline snapshots to test for expected errors:

```js
const exec = require("execa");

test("expected errors", () => {
  expect.assertions(1);
  return exec.shell("tsc -p . --noEmit").catch(err => {
    expect(err.message).toMatchInlineSnapshot();
  });
});
```
