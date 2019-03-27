# Lessons

- There are three ways to declare variables: var, let and const.

| var                                                                                                              | let                              | const                            |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------- |
| Can be declared again                                                                                            | Can't be declared again.         | Can't be declared again.         |
| Can be reassigned                                                                                                | Can be reassigned                | Can't be reassigned              |
| Function scoped                                                                                                  | Block scoped (Inside `{}`)       | Block scoped (Inside `{}`)       |
| If it is declared inside a block (e.g. `if(){}`) in the global scope, the variable will leak to the global scope | It won't leak outside it's scope | It won't leak outside it's scope |

- It's not recommended to declare variables in the global scope, if we want them available somewhere outside their scope it's better to return them.

- If you want an object which properties can't be updated you can use methods like Object.freeze()

- `var` variables can leak into the global scope and they could enter in conflict with other global variables or third party libraries. An IIFE is a function that will immediately run itself and it will create a scope of it's own, that way the variables inside it won't leak into the parent scope. If `const` and `let` variables are inside a block (`{}`) they won't leak into the global scope.

- `let` is also useful in `for` loops, not only because the declared variable won't leak into the parent scope but it won't override it everytime it runs (e.g. `setTimeout()`), instead it will remember the value of when it ran.

- `var` variables are hoisted, meaning that the declaration will be moved all the way up to the beginning of the function scope but it's assignment isn't hoisted. `let` and `const` declarations are not hoisted so we get a `ReferenceError` because it's not defined, and the zone before the variable declaration is called "Temporal Dead Zone".

- When to use what (this is an opinion)
  - Use `const` by default.
  - Use `let` if reassign is needed.
  - Don't use `var` in ES6.
