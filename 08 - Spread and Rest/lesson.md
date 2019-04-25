# Lessons

- The spread operator `...` takes every single item from an iterable and apply it to the containing element (array, objects, DOM NodeList, etc.). Meaning, it will spread the items of the iterable and insert them individually in the containing element.

- The spread operator doesn't mutate objects so it won't affect the original element.

- The `...` operator can also mean a rest parameter, which is the opposite of the spread operator meaning it will take multiple items and packs them into a single array. Some use cases for this are: in a function and destructuring. In a function you can use it to get the rest of the parameters no matter how many they are (similar to `arguments`) and in destructuring you can use it to assign the first x parameters each one of them to a variable and then the rest of the items group them into a single array.
