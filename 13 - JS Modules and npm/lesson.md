# Lessons

- With ES6 we can now use modules in JS. A module in JS is basically just a file with one or many functions and you can make them available to other files or applications.

- People make their libraries and code in general in what's called a package repository, one of the most famous being npm. You can install packages with npm from the CLI and import them into your projects.

- When you initialize an npm project, it will create a `package.json` file that will store all of the references to the installed packages. It will also create a `node_modules` folder where all the code of the package installed will be, including it's dependencies. You don't need to copy or move all the `node_modules` directory along with your project, you can just run `npm install` and it will install all the packages referenced in `package.json`.

- npm packages can be divided into two groups:

  - dependencies: all the dependencies that are part of the application.
  - dev dependencies: all the dependencies that are tools to build our application, but not of the application itself.

- Some web browsers still don't support ES modules (also applies if you have to support old browsers). To solve this you can use Webpack to bundle all the modules into a single (or several if you choose to) file.

- Another useful tool in web development is Babel, which will take your ES code with the latest features and API (e.g. ES6) and compile it to a lower ES version like ES5.

- To configure webpack you need a `webpack.config.js`, you can use it to specify things like using source-maps (helpful in DevTools to debug our actual code and not the code webpack outputs), the entry point of the app, the name of the file where webpack will output all the bundled code, the loaders which are all the modifications processes we want our code to go through (e.g. babel-loader [no longer needed, webpack does it now natively]) and plugins (e.g. uglify to compress code [webpack does it now natively]).

- webpack can be run either from the CLI or with an npm script.

- Everything inside a module is scoped to that module, so nothing leaks to other modules. The only way to make a variable or a method available to other modules is by exporting it, there are two ways to do this:

  - Default export: allows you to export it as the default and import it as any name you'd like. Usually used for the main thing a module does and there can only be one default export, however you ca

  - Named export: allows you to export it as that variable/method name and to import it you need to know that name, but you can use alises both in the import and export statements. Used for variables/methods that you need out of the module and there can be several named exports.

- You can import both a default and several named exports in the same import statement.

- There's all kinds of different types of syntax for ES6 modules, you can find them at [export MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).
