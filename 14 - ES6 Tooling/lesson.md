# Lessons

- Webpack isn't the only way to bundle ES6 Modules. Another way to do it is using SystemJS which uses jspm (JS Package Manager) and it sits on top of npm, one nice feature is that you can run it in the browser so you don't need all the build process like you do with webpack. Although it is useful, SystemJS is no longer used much and might even have some errors, Webpack and Parcel are the preferred build tools.

- Parcel is similar to Webpack in the sense that both are bundlers but Parcel is better known for requiring zero configuration, for example in the entry HTML you don't have to point to the bundle `.js` file since Parcel will do that automatically you can just point it to the main JS file, set up a local server, bundle files like `.scss` automatically and all you need is to install the respective npm packages so no need to config Parcel for these tasks.

- ES6 works on all the modern browsers, but if you have to support older browsers you need to use a transpiler/compiler to convert ES6 -> ES5 and polyfills. One of these compilers is called Babel,

- Babel has two concepts that are plugins and presets:

  - Plugins: Every single feature that JS has is built into a plugin, each of these allows Babel to transform ES6 features to ES5 features. E.g.: classes, for-of, literals, parameters, spread, etc.
  - Presets: A collection of plugins.
    You have to install through `npm` each of these plugins or presets.

- There's a preset called ES2015 that will transform everything to ES5 but what if the code is being run on a browser that does support some ES6 features? That's what the preset `env` is for, instead of telling Babel explicitly what features to support, you just tell Babel what browsers or what Node versions you are trying to support and it will compile it to what ES6 features can be kept and what features needs to transform to ES5. After using presets you might still need to use plugins in case you want to use some experimental feature or future ES versions.

- Babel is configured via a `.babelrc`, `.babelrc.js` file or inside of `package.json` with a `babel` key.

- Babel can be setup through Webpack but if ES6 Modules aren't being used then there's no need for Webpack and Babel can be used standalone.

- Babel can compile ES6 to ES5 code but that only gets us halfway there, Babel only works on syntax (e.g.: arrow function, template strings, const, let, etc.) but there are a lot of new methods like `Array.from()` that Babel doesn't convert it just assumes it is available on all of the arrays, so you need a polyfill for these. A polyfill simply checks if an object doesn't have a method, it will recreate it with regular JS.

- You can usually find these polyfills in website like MDN but you can also use a polyfill that will check if the browser has support for the feature or not, these are tools like Babel's polyfill but if you are not using modules and don't need much to polyfill then polyfill.io is great for that. With polyfill.io you just have to add it with a `<script/>` and it will automatically detect what polyfills the browser needs.
