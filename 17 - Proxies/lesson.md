# Lessons

- Proxies allow to override the default behavior from many of an object's default operations. For example you can get, set and delete (and many other methods) items from an object, and those are operations that have their behavior already set and won't change throughout all the objects, but with proxies you can override their default behavior.

- To use override the default behavior with a proxy you use `const objProxy = new Proxy(obj, handler)`, where in the handler you specify all of the operations which you want to override. So the proxy will have all the behavior of the object passed and also any logic added to it.

- When you want to override one of the default operations of an object, these are called [traps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). Traps will essentially sit between the operation and the result, so you can implement some logic and alter the behavior.

- Proxies are useful for things like formating phone numbers or building a library that other devs are going to use and you need to implement some kind of ergonomics like warn them when they type some property or method wrong, so they'll be able to use it as easy as possible
