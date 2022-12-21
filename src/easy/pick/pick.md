# Pick
This type challenge is to create your own version of pick (without pick obviously). I decided not to use any utility types

Link to Challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
## Table Of Contents
- [Pick](#pick)
	- [Table Of Contents](#table-of-contents)
		- [Tags](#tags)
		- [Explanation](#explanation)
			- [Lookup types](#lookup-types)
			- [Mapped Types](#mapped-types)
			- [Generic Constraints](#generic-constraints)
				- [keyof](#keyof)
		- [Reference](#reference)

### Tags
- Indexed Access Types/Lookup types
- Mapped types
- Generic constraints
  
### Explanation
We need to create a new object type with only the properties in both `Type` and `Union` 
```ts
type MyPick<Type, Union> = /* ... */
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
How can we iterate through the union and create a new object type? The answer is mapped types

For example, we can set each key of `Chair` to a boolean like this with dynamic keys and the `in` operator

```ts
type ChairKeysUnion = "color" | "legCount" | "isComfortable"

type BooleanChair = {
	[Key in ChairKeysUnion]: boolean
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
#### Generic Constraints
But why can't we just combine mapped types and lookup types to set each property in the union to the appropriate lookup type like this?

```ts
type MyPick<Type, Union> = {
	[Key in Union]: Type[Key]
}
```
At this point, `MyPick` is not typesafe—it accepts any and all properties in `Union`. In the case a property doesn't exist in the `Type` passed to `MyPick`, it will be on the new object type with a value of `unknown`

```ts
type NewChair = MyPick<Chair, 'color' | 'isComfortable' | 'invalid'>
/*
type NewChair = {
    color: string;
    isComfortable: boolean;
    invalid: unknown;
}*/
```
---

##### keyof
To limit `Union` to only lookup types in `Type`, we first need `Type`'s lookup types. To do this, we can use the `keyof` operator. It takes an object type and returns a string, string union, or number union of the type's keys.

```ts
type Chair = {
	color: string,
	legCount: number,
	isComfortable: boolean
}

type ChairIndexUnion = keyof Chair // "color" | "legCount" | "isComfortable"
```
Now that we have both unions, we can constrain the `Union` parameter to lookup types in `Type` with the `extends` keyword 
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

Congratulations—you now have a typesafe pick function!

---

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