# Lessons

- A promise is something that will happen between now and sometime in the future, but probably not immediately. You can think of them as the restaurant buzzers where you'll be given one immediately for your order but you won't get the actual food until the buzzer buzzes. Promises are often used to fetch data.

- A promise has a `.then()` and `.catch()` method that receive a callback function and will run once the promise is settled, meaning when the data has come back. `.then()` in case it was successful and `.catch()` in case there was an error.

- You can chain as many `.then()` as you need and `.catch()` will run with any error it encounters down the promise chain.

- Promises are already built into a lot of libraries and even the browser API like with `.fetch(..)`. But you can also make your own Promises, for this you need to use the Promise constructor: `new Promise((resolve, reject) { .. })` , which will either finish successfully and resolve with the data and passes it back to you or rejects with an error.

- Another useful case for Promises is when you need flow control (usually found on the backend with NodeJS when you query a DB).

- If you return a Promise inside a `.then()` then you can chain another `.then()` to work on the data passed back by that returned Promise.

- When you have Promises that aren't dependent on each other you can fire them all off at the same time in some different ways:

  - `Promise.all([..])` passing an array of Promises, and it will fire all the Promises at the same time and then it will return another Promise, when all the promises are resolved, with an array of all the values each of the Promises returned in the order each of the Promises resolved. If one of the Promises rejects then the entire Promise returned is rejected.

  - `Promise.any([..])` works the same way but it will resolve after one of the Promises resolves.
