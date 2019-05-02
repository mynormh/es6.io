# Lessons

- ES6 introduces a new primitive type: `Symbol`. Symbols are unique identifiers, they help us avoid naming collisions. You create them via `Symbol(..)` where it expects a string as the descriptor of the Symbol, this description won't be the actual Symbol which will be something like a GUID and you add the descriptor just so you know how to reference that Symbol.

- They are useful in cases of libraries or frameworks that want to add to the prototype chain, through Symbols they can make sure they won't run into naming collisions with other libraries or even new features of ES. Another useful case is when creating an object of your class and have two properties with the same key, you could use Symbols to still use the same names twice or more as descriptors of Symbols and the key itself wouldn't repeat.

- Symbols are not enumerable so you can't loop over them but you can use `Object.getOwnPropertySymbols(..)`. This will return an array of all the Symbols in the passed object.
