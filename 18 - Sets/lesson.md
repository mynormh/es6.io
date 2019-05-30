# Lessons

- A Set in JS is an array with unique items, but unlike regular arrays items can't be accessed individually and it's not index based.

- To get it's values first you need to get the set's generator with `mySet.values()` and then loop through that generator.

- A WeakSet is like a normal Set but can only contain objects and can't be looped over since there's no iterator on a WeakSet. The advantage of WeakSet is that they clean themselves up, meaning that if we delete one of the objects referenced in the Set then the reference itself in the Set will also be deleted by the garbage collector (after some time), this makes sure there are no memory leaks (a reference to something that no longer exists).
