# Pick

## Table Of Contents
- [Pick](#pick)
	- [Table Of Contents](#table-of-contents)
	- [keyof](#keyof)
	- [Mapped Types](#mapped-types)
	- [Generic Constraints](#generic-constraints)
	- [Tags](#tags)
		- [Reference](#reference)


## keyof
The `keyof` operator takes an object type and returns a string, string union, or number union of the type's keys.

```ts
type Chair = {
	color: string,
	legCount: number,
	isComfortable: boolean
}

keyof Chair // "color" | "legCount" | "isComfortable"
```

To get the type of these keys (or indexed access types/lookup types), we can use square bracket notation

```ts
Chair["color"] // string
Chair["legCount"] // number
```
Note that only types can be used for indexing
```ts
const key = "color"
Chair[key] // Type "key" cannot be used as an index type
```

---
## Mapped Types
Now that we have a union of the keys of the type, how can we make a new object type out of it? The answer is mapped types

For example, we can set each key of `Chair` to a boolean like this with dynamic keys and the `in` operator

```ts
type ChairKeysUnion = keyof Chair 
// "color" | "legCount" | "isComfortable"

type BooleanChair = {
	[Property in ChairKeysUnion]: boolean
} 
/*
type BooleanChair = {
    color: boolean;
    legCount: boolean;
    isComfortable: boolean;
}
*/
```

---
## Generic Constraints
But why can't we just combine mapped types and lookup types to set each property in the union to the appropriate lookup type like this?

```ts
type MyPick<Type, Union> = {
	[Key in Union]: Type[Key]
}
```


In the case a property doesn't exist in the `Type` passed to `MyPick`, it will be on the new object type with a value of `unknown`

```ts
type NewChair = MyPick<Chair, 'color' | 'isComfortable' | 'invalid'>
/*
type NewChair = {
    color: string;
    isComfortable: boolean;
    invalid: unknown;
}*/
```
At this point, `MyPick` accepts any and all properties in `Union`, so we can use the `extends` keyword to only allow unions with properties contained in `Type`
```ts
type MyPick<Type, Union extends keyof Type> = {
	[Key in Union]: Type[Key]
}

type NewChair = MyPick<Chair, 'color' | 'isComfortable' | 'invalid'>
/*
Type '"color" | "isComfortable" | "invalid"' does not satisfy the constraint 'keyof Chair'.
Type '"invalid"' is not assignable to type 'keyof Chair'.
*/
```




## Tags
- Indexed Access Types/Lookup types
- Mapped types
- Generic constraints

### Reference
- Lookup Types/Indexed Access Types
  - [Lookup types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
  - [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
  - [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- Mapped Types
  - [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- Generic Constraints
  - [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
  - [Using Type Parameters in Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints)