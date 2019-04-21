# Lessons

- An iterable is anything that can be loop over, like an array or string.

- The problem with the `for` loop is that you don't get a variable for each of the values and if you use `var` you won't have a closure. The `foreEach` loop works pretty well, it gives us both a variable for each value and closure, but you can't abort the loop or skip one value. `for..in` works specifically with indexes and iterates over absolute everything including methods added to the prototype.

- The `for..of` loop works with any type of data except objects.

- Any iterable has a generator which is used to iterate over the iterable. The `for..of` loop simply does this automatically for us. We can get the generator of an iterable with `.entries()` and then loop over the iterable manually with it by using `.next()`.

- There's no straightforward way to get the index in a `for..of` loop but we can use the generator to get it by iterating over the generator, thus getting the value and index of each of the values.

- You can't use `for..of` with Objects but you can use it to iterate over the keys of the object with `Object.keys(myObj)`, this way you can iterate over the keys of the object and then get the value of that key.
