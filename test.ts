import { _, assert, Test } from ".";

type T1 = Test<never, unknown>; // "❌ Right type is not assignable to left type"
type T2 = Test<unknown, never>; // "❌ Left type is not assignable to right type"
type T3 = Test<any, never>; // "❌ Left type is 'any' but right type is not"
type T4 = Test<any, unknown>; // "❌ Left type is 'any' but right type is not"
type T5 = Test<never, any>; // "❌ Right type is 'any' but left type is not"
type T6 = Test<unknown, any>; // "❌ Right type is 'any' but left type is not"

assert(true, false); // "❌ Left type is not assignable to right type"
assert(false, true); // "❌ Left type is not assignable to right type"

assert(1, 1);
assert(1, 2); // "❌ Left type is not assignable to right type"
assert(1, _ as number); // "❌ Right type is not assignable to left type"
assert(1, _ as any); // "❌ Expected type is 'any' but actual type is not"

assert({ a: 1 }, { a: 1 });
assert({ a: 1 }, _ as { readonly a: number }); // "❌ Unexpected or missing 'readonly' property"
assert(_ as { readonly a: number }, { a: 1 }); // "❌ Unexpected or missing 'readonly' property"

assert(_ as any, _ as any);
assert(_ as any, _ as never); // Argument of type 'any' is not assignable to parameter of type 'never'
assert(_ as any, _ as unknown); // Argument of type 'any' is not assignable to parameter of type 'never'

assert(_ as never, _ as never);
assert(_ as never, _ as unknown); // Argument of type 'unknown' is not assignable to parameter of type 'never'
assert(_ as never, _ as any); // Argument of type 'any' is not assignable to parameter of type 'never'
assert(_ as never, 2); // "❌ Right type is not assignable to left type"

assert(_ as unknown, _ as any); // "❌ Right type is 'any' but left type is not"
assert(_ as unknown, _ as never); // "❌ Left type is not assignable to right type"

assert(_ as any[], _ as ReadonlyArray<any>); // "❌ Right type is not assignable to left type"
assert(_ as ReadonlyArray<any>, _ as any[]); // "❌ Left type is not assignable to right type"

assert(_ as never[], _ as never[]);
assert(_ as never[], _ as [never]); // "❌ Left type is not assignable to right type"
assert(_ as [never], _ as [number]); // "❌ Right type is not assignable to left type"
