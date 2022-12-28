import type { Equal, Expect } from '../../../utils'

//solution
type First<Type extends any[]> = Type extends [] ?
	// if Type is empty array, return never
	never :
	// else return the first element
	Type[0]

//explanation
/*
The Type parameter is already constrained to the arrays of any type, so we don't need to worry about the error cases as long as we don't change the parameters

If we just return Type[0], we will pass every case except those where the array empty, so we can just use a conditional type to return the first element if it exists, else return never

Tags: conditional types, generic constraints, indexed types
*/

//testcases
type cases = [
	Expect<Equal<First<[3, 2, 1]>, 3>>,
	Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
	Expect<Equal<First<[]>, never>>,
	Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
	// @ts-expect-error
	First<'notArray'>,
	// @ts-expect-error
	First<{ 0: 'arrayLike' }>,
]