import type { Equal, Expect } from '../../../utils'

// solution
type Length<Type extends readonly any[]> = Type["length"]

// explanation
/*
To get the length of the tuple, we simply need to access the "length" property on the Type parameter. 

This does pass the first 2 cases, but it does not cause errors where it should for the last 2
To solve this, we can contrain `Type` to readonly arrays of any type
*/

// test cases
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
	Expect<Equal<Length<typeof tesla>, 4>>,
	Expect<Equal<Length<typeof spaceX>, 5>>,
	// @ts-expect-error
	Length<5>,
	// @ts-expect-error
	Length<'hello world'>,
]