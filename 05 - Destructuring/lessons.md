# Lessons

- Destructuring allows us to extract data from arrays, objects, maps and sets.

- To destructor objects we use `{var1, var2} = obj`, where `var1` and `var2` are properties of `obj`. You can also rename the variables like this `{var1: myVar1, var2: myVar2} = obj` in case you don't wanna use the object's keys.

- When destructuring objects you can also use default values, if the object being destructured contains the key it will assign that value otherwise it will use the default value.

- Destructuring arrays works pretty much the same way as with objects but you use `[]` instead.

- A useful scenario for destructuring arrays is when you need to swap two variables, you can now do it like this: `[var2, var1] = [var1, var2]`. This will create an array with `var1` and `var2` first and then assign it to the swapped variables.

- Another useful case is when a function returns an object you can immediately destructor the returned object, without worrying about the order or if you destructor all they properties.

- When using default parameters it's often bothersome to have to remember the order of the parameters, you can use destructuring to avoid this. You simply wrap the parameters in `{}` and pass all the arguments as an object. And you don't even have to pass `undefined` values to use the defaults, you can just skip those arguments entirely.
