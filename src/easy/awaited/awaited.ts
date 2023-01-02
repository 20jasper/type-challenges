import type { Equal, Expect } from '../../../utils'

// solution
type MyAwaited<Type extends PromiseLike<any>> = Type extends PromiseLike<infer ReturnType> ?
	(ReturnType extends Promise<any> ?
		MyAwaited<ReturnType> :
		ReturnType)
	: Type

//testcases
type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
	Expect<Equal<MyAwaited<X>, string>>,
	Expect<Equal<MyAwaited<Y>, { field: number }>>,
	Expect<Equal<MyAwaited<Z>, string | number>>,
	Expect<Equal<MyAwaited<Z1>, string | boolean>>,
	Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>