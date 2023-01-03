import type { Equal, Expect } from '../../../utils'


//solution
type TupleToObject<Type extends readonly PropertyKey[]> = {
	[Key in Type[number]]: Key
}

//explanation
/*
Passing the number type to a tuple returns a union of that tuple's elements

The array elements must only be strings, numbers or symbols because they must be a property key. Something like an array can't be a key in a javascript object

Reference: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
*/

//test cases
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
	Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
	Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
	Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>