# Lessons

- ES6 introduced classes to JS but even though they are classes this is not a new way to do Object Oriented Programing, it's just syntactic sugar meaning that it just makes it "easier" to work with Prototypal Inheritance Programing.

- Prototypal Inheritance is when you put a method on the original function constructor it will be inherited by any object declared with the `new` keyword. For example any array you create will inherit all the methods from the `Array` object through its prototype, where the new object's prototype is pointed to the `Array`'s prototype.

- There are two ways to make a class in ES6: Class Declaration and Class Expression. Each similar to Function Declaration and Function Expression respectively.

- The only method required when creating a class is a `constructor()` function which will be called every time we create an "instance" of the class.

- In JS there are static methods and instance methods.

  - Static methods: All the methods that only live inside an object but aren't inherited by instances of that same object, e.g: `Array.of()`
  - Instance methods: methods that are inherited by every instance of that same object, e.g.: `myArray.of()`.

- To create static methods in ES6 classes you add the keyword `static` before the method declaration.

- You can also use getters and setters in classes as you would an object by using the keywords `get` and `set`, these aren't methods but properties of the object.

- ES6 classes can also be extended in case you want to declare a wide/general class and then add some specificity to another class that extends the original, for example an `Animal` class but the `Dog` instance will have specific attributes and methods like breed and bark. This is done by using the `extends` keyword in the function declaration.

- When you extend a class, before adding specificity to the class (like it's own properties) you need to use the constructor of the class it extends via the `super()` method. `super()` basically represents the constructor of the class being extended so it needs the same parameters.

- One general tip or warning is don't go deeper than two or three `extends`, since it will start to get confusing.

- One thing ES6 classes allow us is to extend the built-in objects (e.g.: Array) not by monkey-patching the prototype but by creating our own class that are model after an array.
