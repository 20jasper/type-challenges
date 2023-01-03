import type { Equal, Expect } from '../../../utils'

//solution
type If<Condition extends boolean, True, False> = Condition extends true ?
	True :
	False

//test cases
type cases = [
	Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
	Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>