import { uniq } from "lodash";
import insane from "insane";
import jsonp from "jsonp";
// default export (can be renamed to whatever in the import statement)
// import mynorIsCool from "./src/config";

// named export (has to have the same name as the export and has to be inside curly brackets [not to be confused with destructuring syntax]). You can use alises.
import { apiKey as key, url, sayHi, old, dog } from "./src/config";
import User, { createUrl, gravatar } from "./src/user";

console.log(key, url);
sayHi("mynor");

const ages = [1, 1, 4, 52, 12, 4];
console.log(uniq(ages));

const mynor = new User("Mynor Morales", "mynor.rmh@gmail.com", "mynormh.com");
const profile = createUrl(mynor.name);
const image = gravatar(mynor.email);
console.log(image);
