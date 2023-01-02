import type { Equal, Expect } from '../../../utils'

// solution
type MyExclude<Type, Union> = Type extends Union ? never : Type

// explanation
/*
Use a conditional type to add a type if it's in the `Union`. Conditional types are applied to each type in the union type. 
*/

// testcases
type cases = [
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
	Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
	Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]