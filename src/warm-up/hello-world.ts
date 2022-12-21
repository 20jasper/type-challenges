import { Expect, Equal } from "../../utils/index"

// expected to be string
type HelloWorld = string

// you should make this work
type test = Expect<Equal<HelloWorld, string>>