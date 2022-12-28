import type { Equal, Expect } from '../../../utils'

//solution
type First<Type extends any[]> = Type extends [] ?
	// if Type is empty array, return never
	never :
	// else return the first element
	Type[0]

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