# Lessons

- In ES6, strings come with 4 new methods:

  - `.startsWith(textToSearch, startAfterIndex)`: returns `true` or `false` and it's case sensitive. The second argument allows to skip characters at the beginning.
  - `.endsWith(textToSearch, substring)`: returns `true` or `false` and it's case sensitive. The second argument allows to only take a certain number of characters from the start.
  - `.includes(textToSearch)`: returns `true` or `false` and it's case sensitive.
  - `.repeat(number)`: repeats x number of times the string. Useful in cases like a leftPad function
