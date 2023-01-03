import type { Equal, Expect } from '../../../utils'

//solution
type Concat<Arr1 extends any[], Arr2 extends any[]> = [...Arr1, ...Arr2]

/*
We can use spread syntax to expand each array passed to `Concat`, also known as "rest elements." The parameters must be contrained to arrays to do this however.

References:
Rest elements
https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
Variadic tuple types
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
Generic constraints
https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
*/

//test cases
type cases = [
	Expect<Equal<Concat<[], []>, []>>,
	Expect<Equal<Concat<[], [1]>, [1]>>,
	Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
	Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]