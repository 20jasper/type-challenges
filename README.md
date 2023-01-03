# Type Challenges

Type challenge roadmap and solutions with explanations from this repo: https://github.com/type-challenges/type-challenges

- [Type Challenges](#type-challenges)
	- [Get started](#get-started)
	- [Categories](#categories)
		- [Conditional Types](#conditional-types)
		- [Lookup Types](#lookup-types)
		- [Mapped Types](#mapped-types)
	- [Reference](#reference)
		- [General](#general)
		- [Conditional Types](#conditional-types-1)
		- [Generic Constraints](#generic-constraints)
		- [Unions](#unions)
		- [Lookup Types](#lookup-types-1)
		- [Type Inference](#type-inference)
		- [Mapped Types](#mapped-types-1)


I struggled through doing the challenges in order so you don't have to! Lots of these challenges build on one another, and reference materials can be hard to find, so I decided to compile it all here.

There are categories and a recommended order to work through each, but don't be scared to jump through categories as you see fit.

## Get started

Use this challenge to warm up and make sure the testing types are working, then get into some of the categories!

<a href="./questions/00013-warm-hello-world/README.md" target="_blank"><img src="https://img.shields.io/badge/-13%E3%83%BBHello%20World-teal" alt="13・Hello World"/></a>

---
## Categories

### Conditional Types
<table>
    <thead>
        <tr>
            <th>Challenge</th>
            <th>My solution</th>
            <th>Difficulty</th>
            <th>Tags</th>
        </tr>
    </thead>
    <tbody>
				<tr>
            <td><a href="./questions/00043-easy-exclude/README.md" target="_blank"><img src="https://img.shields.io/badge/-43%E3%83%BBExclude-7aad0c" alt="43・Exclude"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Conditional Types</td>
        </tr>
        <tr>
            <td><a href="./questions/00013-warm-hello-world/README.md" target="_blank"><a href="./questions/00268-easy-if/README.md" target="_blank"><img src="https://img.shields.io/badge/-268%E3%83%BBIf-7aad0c" alt="268・If"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Conditional Types, Generic Restraints</td>
        </tr>
				<tr>
            <td><a href="./questions/00189-easy-awaited/README.md" target="_blank"><img src="https://img.shields.io/badge/-189%E3%83%BBAwaited-7aad0c" alt="189・Awaited"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Conditional Types, Generic Restraints, Type Inference</td>
        </tr>
    </tbody>
</table>


### Lookup Types
<table>
    <thead>
        <tr>
            <th>Challenge</th>
            <th>My solution</th>
            <th>Difficulty</th>
            <th>Tags</th>
        </tr>
    </thead>
    <tbody>
				<tr>
            <td><a href="./questions/00018-easy-tuple-length/README.md" target="_blank"><img src="https://img.shields.io/badge/-18%E3%83%BBLength%20of%20Tuple-7aad0c" alt="18・Length of Tuple"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Lookup Types, Generic Restraints</td>
        </tr>	
        <tr>
            <td><a href="./questions/00014-easy-first/README.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BBFirst%20of%20Array-7aad0c" alt="14・First of Array"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Lookup Types, Conditional Types</td>
        </tr>
    </tbody>
</table>


### Mapped Types
<table>
    <thead>
        <tr>
            <th>Challenge</th>
            <th>My solution</th>
            <th>Difficulty</th>
            <th>Tags</th>
        </tr>
    </thead>
    <tbody>
				<tr>
            <td><a href="./questions/00007-easy-readonly/README.md" target="_blank"><img src="https://img.shields.io/badge/-7%E3%83%BBReadonly-7aad0c" alt="7・Readonly"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Mapped Types, Lookup Types</td>
        </tr>	
				<tr>
            <td><a href="./questions/00004-easy-pick/README.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BBPick-7aad0c" alt="4・Pick"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Mapped Types, Lookup Types, Generic Constraints</td>
        </tr>	
				<tr>
            <td><a href="./questions/00011-easy-tuple-to-object/README.md" target="_blank"><img src="https://img.shields.io/badge/-11%E3%83%BBTuple%20to%20Object-7aad0c" alt="11・Tuple to Object"/></a></td>
            <td></td>
            <td>Easy</td>
            <td>Mapped Types, Lookup Types, Generic Constraints</td>
        </tr>
    </tbody>
</table>

## Reference

### General
- [Debugging utility type](https://github.com/typescript-community/resources/blob/master/TYPES.md)
- [Global Interface Reference](https://microsoft.github.io/PowerBI-JavaScript/modules/_node_modules_typedoc_node_modules_typescript_lib_lib_es5_d_.html)

### Conditional Types
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

### Generic Constraints
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [Using Type Parameters in Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints)

### Unions
Unions types are very useful. `keyof` can be used to get a union of an object type's keys, and passing the `number` type to a an array type will return a union of its elements.

- [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

### Lookup Types
- [Lookup types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

### Type Inference
- [Inferring within conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)

### Mapped Types
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)