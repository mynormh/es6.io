# Lessons

- Generators are functions that you can start and pause for an indefinite amount of time, you create a generator by using `function*` or `function *myFunction` in the declaration.

- Inside a generator function you can use the `yield` keyword which will sort of act as a "return for now". And to get the "return for now" value first you create a variable that will store the actual generator, and then in order to get the actual "return for now" value you use the `next()` on the variable that contains the generator.

- Everytime we use `.next()` it will return an object with the value and a boolean `done` to indicate if it's done yielding values from the generator. You have to call `.next()` n+1 (n=number of values to yield) times to get `{value:undefined, done:true}`.

- Generators are really useful for waterfall Ajax flow control, where one Ajax call depends on the result of the previous one (a cause of callback hell before).

- Instead of having to call manually a generator that yields hard coded values, you can loop through it with a `for..of` loop. You can also yield values directly inside the loop and the generator is smart enough to know when to stop yielding values when `yield` is inside a loop like `for..of`
