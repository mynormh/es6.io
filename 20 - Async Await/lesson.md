# Lessons

- `async..await` allows us to pause the execution of the code and wait for the current line/task to finish before resuming the execution.

- The `await` keyword can only be used inside a function that's been marked as `async`.

- At the core `async..await` is built on top of Promises, so you must have a Promise based function in order to use `async..await`.

- The simples way to handle an error in an `async` function is to use a `try..catch` block.

- Another, more complicated, way to handle errors is with a High Order Function which basically is a function that takes in a function as an argument, adds some logic to it and returns a new function. For example you could say that `.map()` is a High Order Function since it takes another function as an argument.

- When using a High Order Function for error handling you attach a `.catch()` to the returned function (since the function has to be promise based), so basically the "logic" added in this case is the error handling with a `.catch()`.

- High Order Function is useful when you are handling all the errors in a function in the same way (e.g. redirecting to an error page in a router) and you don't want to write the same `try..catch` for each one, but in cases where you need to catch and handle the errors in a different way (e.g. form validation) then `try..catch` is better.

- If you need to execute two or more functions at the same time in an `async` function, you can use a combination of `Promise.all([..])` and `await` to accomplish this. The same goes for `Promise.race([..])`.

- We can promisify callback based functions by creating a function that returns the callback function wrapped in a Promise.
