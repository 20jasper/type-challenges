# Readonly
This type challenge is to create your own version of the Readonly utility function (without the utility obviously).

Link to Challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
## Table Of Contents
- [Readonly](#readonly)
	- [Table Of Contents](#table-of-contents)
		- [Tags](#tags)
		- [Explanation](#explanation)
			- [Lookup types](#lookup-types)
			- [Mapped Types](#mapped-types)
		- [Conclusion](#conclusion)
		- [Reference](#reference)

### Tags
- Indexed Access Types/Lookup types
- Mapped types
  
### Explanation
We need to create a new object type with readonly properties
```ts
type MyReadonly<Type> = /* ... */
```

#### Lookup types
To get the type of the keys (keys are also known as indexed access types or lookup types) in `Chair`, we can use square bracket notation just like accessing a property or method in a JavaScript object

```ts
type Chair = {
	color: string,
	legCount: number,
	isComfortable: boolean
}

Chair["color"] // string
Chair["legCount"] // number
```
Note that only types can be used for indexing
```ts
const key = "color"
Chair[key] // Type "key" cannot be used as an index type
```

---
#### Mapped Types
We can set each property of `Type` to readonly by iterating through a union of its `PropertyKeys`, which can be created with `keyof`

```ts
type MyReadonly<Type> = {
	readonly [Key in keyof Type]: Type[Key]
}

type ReadonlyChair = MyReadonly<Chair>
/*
type ReadonlyChair = {
    readonly color: string;
    readonly legCount: number;
    readonly isComfortable: boolean;
}
*/
```
Note that `Key` in this example is a parameter, so it is just a placeholder name. It could be called `Property` or `Jimothy` and work just as well

---


### Conclusion

Congratulations—you now have a typesafe pick function!

---

### Reference
- Lookup Types/Indexed Access Types
  - [Lookup types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
  - [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
  - [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- Mapped Types
  - [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)