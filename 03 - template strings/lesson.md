# Lessons

- Template strings `text` are a new way to declare a string and it allows to use variables inside it using `${var}`.

- It also allows to include line breaks without any extra characters to indicate the line breaks. This allows to easily create HTML fragments.

- You can include any valid JS expression inside `${}`, like markup, math expressions, array functions (map, filter...), if statements, a function call, etc.

- A tagged template literal is basically us taking a template string and running it by a function, thus having control of how the variables are replaced. The syntax is simply putting the name of the function before the string template `functionName`myTemplateString \${var}``, the function gets an array of the strings and each one of the variables in the template string (using the rest operator we can group them in an array) and whatever is returned by the function is what the value of the entire string will be.

- One trick to pass text as a variable to a tagged template literal is to use simple quotes inside the variable syntax: `${'myText'}`, and they will still show up in the variables part of the function.

- Whenever you display data from a user, you must make sure that the user isn't doing something malicious like inserting HTML or JS. The solution to this is to sanitize the HTML and you can use a tagged template for this and using libraries like dompurify.
