# Lessons

- `.from()` and `.of()` aren't on the array's prototype, they're on the Array object itself. This means a new array won't have these methods but you can use them as `Array.from()` and `Array.of()`. `.find()`, `.findIndex()`, `.some()` and `.every()` are on the prototype.

- `Array.from()` will take an array-like object and turn it into an array. The first argument is the array-like object and it receives a second argument that's a map function and will allow us to modify the data as we are creating the array.

- `Array.of()` is pretty simple, it will create an array of every single argument you pass it.

- `.find()` receives a callback and will loop over every item in the array and will return the item where the conditional equals `true`.

- `.findIndex()` is similar to `.find()` but it will return the index of the item in the array.

- `.some()` will check the data in the array to see if some of the items meet the condition.

- `.every()` will check the data to see if every one of the items meets the condition.
