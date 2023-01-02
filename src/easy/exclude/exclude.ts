import type { Equal, Expect } from '../../../utils'

// solution
type MyExclude<Type, Union> = Type extends Union ? never : Type

// testcases
type cases = [
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
	Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]