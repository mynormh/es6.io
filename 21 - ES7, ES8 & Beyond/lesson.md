# Lessons

- With Class Properties we no longer have to include the properties of a class inside the constructor as `this.barks`

- `padStart(x)` and `padEnd(x)` add a number of blank spaces to the start or end, respectively, so the string has a total of `x` characters. They take a second parameter that takes the character to use as padding instead of blank spaces. These are useful for example when you need to align something in a column of a table or to pad something like 1,2,3 to 001,002,003.

- `**` is a new operator used as exponential, what before used to be done with `Math.pow()` but it had some limitations like a limit of only two parameters.

- Trailing commas have existed in objects and arrays but now they can also be used in function arguments. A benefit of using trailing commas is for example when using git you won't have to edit a line just for adding a comma.

- For some time now we've had `Object.keys()`, but now we also two new static methods:

  - `Object.entries()`: Returns an array were each entry of the object is in the array.
  - `Object.values()`: Returns an array of only the values in an object.

  These can also be used with a `for..of` loop.
