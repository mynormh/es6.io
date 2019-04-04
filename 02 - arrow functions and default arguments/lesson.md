# Lessons

- Arrow functions are identified by a fat arrow `=>`.

- Arrow functions are always anonymous functions, this has some disadvantages like no easy way to identify them in the stack trace. You can however put them in a variable, which is a function expression and still won't give us great stack trace.

- Some advantages of arrow functions

  - More concise
  - Implicit `return`
  - Doesn't rebind `this`

- If there's only one parameter then the `()` around the parameter is optional. If the content of the arrow function is a one-liner then the `{}` are also optional.

- If you just want to implicitly return an object, then you wrap the object in `{}` so it knows it's an object literal.

- Inside an arrow function `this` doesn't get rebound according to the `this` rules, it just takes the same value as it's parent's `this`.

- You can create defaults for the function's arguments by assigning them a value in the arguments definition, if it receives `undefined` it'll use the default, otherwise it will use the passed value.

- When NOT to use arrow functions
  - When you really need to use `this` (e.g.: addEventListener).
  - When you need a method to be bound to an object (e.g.: method inside an object that references one of it's properties).
  - When you need to add a prototype method (e.g.: add a method to the prototype of a Class).
  - When you need the `arguments` object (e.g.: a function that accepts infinite arguments).
