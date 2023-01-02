import type { Equal, Expect } from '../../../utils'

// solution
type MyExclude<T, U> = any

// testcases
type cases = [
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
	Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]