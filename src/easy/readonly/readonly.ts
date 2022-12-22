import type { Equal, Expect } from '../../../utils'

// solution
type MyReadonly<Type> = {
	readonly [Key in keyof Type]: Type[Key]
}

// test cases
type cases = [
	Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
	title: string
	description: string
	completed: boolean
	meta: {
		author: string
	}
}