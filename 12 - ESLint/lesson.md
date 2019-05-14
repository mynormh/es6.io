# Lessons

- ESLint is a linting tool for our JS code, meaning it will tell us if there's something wrong with it.

- It's better to have a configuration file for ESLint on a per project basis since there will probably be different people on each project thus different coding styles. You put all the configuration options in a `.eslintrc` or `.eslintrc.js` file, all the ESLint rules can be found at <https://eslint.org/docs/rules/>.

- By default all the rules are turned off so you have to turn on all the ones you want in the config file. There are handy presets that group the rules somebody else uses, some common ones are eslint-recommended and airbnb. For the ones like airbnb you have to install the corresponding npm packages and include it in the `extends` section. The preset rules settings can be overridden by setting the rule to whatever you like in the `rules` section.

- ESLint gives us an easy way to fix errors it knows how to fix by using the flag `--fix`.

- When ESLint can't find a config file inside your project then it will look on the parent folders for one. That's why it's useful to have a global config file so if you don't have one in your project it will just use the global one, usually located in the home directory `~` (`C:/Users/username/` for Windows).

- Sometimes libraries put a variable in the window so you can use it, but if you do this ESLint will say it's an error. To avoid this you can put a comment at the top of your file with the word `/* globals` followed by the name of the global variables. You could set this as a global configuration but it's better to do it only where you need it.

- You can disable ESLint entirely or just specific rules by adding the comment `/* eslint-disable */` followed by the rules optionally, you can do this for the entire file (comment at the top) or just for a line or a block of code (comment at the start of the block and and `/* eslint-enable*/`) at the end. It also works the other way around by enabling a rule that was disabled by default.

- ESLint has a lot of plugins, these are installed similar to the presets but using the `plugins` section. There are a lot of useful plugins like linting JS code inside HTML or Markdown files.

- ESLint cant be setup right inside the editor via plugins and the settings of the editor.

- Hooks in git are basically code that runs before or after something related to git happens, they are located inside the `hooks` folder in the `.git/` directory. With hooks you can do things like only accept commits that include code without ESLint errors.
