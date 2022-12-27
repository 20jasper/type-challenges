import type { Equal, Expect } from '../../../utils'


// solution
type DeepReadonly<Type> = {
	readonly [Key in keyof Type]: Type[Key] extends Function ?
	// if value is a function, do not make it readonly
	Type[Key] :
	// else go deeper within an object, or end at a primitive value
	DeepReadonly<Type[Key]>
}

// test cases
type cases = [
	Expect<Equal<DeepReadonly<X1>, Expected1>>,
	Expect<Equal<DeepReadonly<X2>, Expected2>>,
]

type X1 = {
	a: () => 22
	b: string
	c: {
		d: boolean
		e: {
			g: {
				h: {
					i: true
					j: 'string'
				}
				k: 'hello'
			}
			l: [
				'hi',
				{
					m: ['hey']
				},
			]
		}
	}
}

type X2 = { a: string } | { b: number }

type Expected1 = {
	readonly a: () => 22
	readonly b: string
	readonly c: {
		readonly d: boolean
		readonly e: {
			readonly g: {
				readonly h: {
					readonly i: true
					readonly j: 'string'
				}
				readonly k: 'hello'
			}
			readonly l: readonly [
				'hi',
				{
					readonly m: readonly ['hey']
				},
			]
		}
	}
}

type Expected2 = { readonly a: string } | { readonly b: number }