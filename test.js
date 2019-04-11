const exec = require("execa");

test("expected errors", () => {
  expect.assertions(1);
  return exec.shell("tsc -p . --noEmit").catch(err => {
    expect(err.message).toMatchInlineSnapshot(`
      "Command failed: /bin/sh -c tsc -p . --noEmit
      
      test.ts(10,8): error TS2345: Argument of type 'true' is not assignable to parameter of type '\\"❌ Left type is not assignable to right type\\"'.
      test.ts(11,8): error TS2345: Argument of type 'false' is not assignable to parameter of type '\\"❌ Left type is not assignable to right type\\"'.
      test.ts(14,8): error TS2345: Argument of type '1' is not assignable to parameter of type '\\"❌ Left type is not assignable to right type\\"'.
      test.ts(15,8): error TS2345: Argument of type '1' is not assignable to parameter of type '\\"❌ Right type is not assignable to left type\\"'.
      test.ts(16,8): error TS2345: Argument of type '1' is not assignable to parameter of type '\\"❌ Right type is 'any' but left type is not\\"'.
      test.ts(19,8): error TS2345: Argument of type '{ a: number; }' is not assignable to parameter of type '\\"❌ Unexpected or missing 'readonly' property\\"'.
      test.ts(20,8): error TS2345: Argument of type '{ readonly a: number; }' is not assignable to parameter of type '\\"❌ Unexpected or missing 'readonly' property\\"'.
      test.ts(23,8): error TS2345: Argument of type 'any' is not assignable to parameter of type 'never'.
      test.ts(24,8): error TS2345: Argument of type 'any' is not assignable to parameter of type 'never'.
      test.ts(27,20): error TS2345: Argument of type 'unknown' is not assignable to parameter of type '\\"❌ Right type is not assignable to left type\\"'.
      test.ts(28,20): error TS2345: Argument of type 'any' is not assignable to parameter of type 'never'.
      test.ts(29,20): error TS2345: Argument of type '2' is not assignable to parameter of type '\\"❌ Right type is not assignable to left type\\"'.
      test.ts(31,8): error TS2345: Argument of type 'unknown' is not assignable to parameter of type '\\"❌ Right type is 'any' but left type is not\\"'.
      test.ts(32,8): error TS2345: Argument of type 'unknown' is not assignable to parameter of type '\\"❌ Left type is not assignable to right type\\"'.
      test.ts(34,8): error TS2345: Argument of type 'any[]' is not assignable to parameter of type '\\"❌ Right type is not assignable to left type\\"'.
      test.ts(35,8): error TS2345: Argument of type 'readonly any[]' is not assignable to parameter of type '\\"❌ Left type is not assignable to right type\\"'.
      test.ts(38,8): error TS2345: Argument of type 'never[]' is not assignable to parameter of type '\\"❌ Left type is not assignable to right type\\"'.
      test.ts(39,8): error TS2345: Argument of type '[never]' is not assignable to parameter of type '\\"❌ Right type is not assignable to left type\\"'.
      "
    `);
  });
});
