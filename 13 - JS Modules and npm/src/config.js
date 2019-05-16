// named export
export const apiKey = "abc123";

export const url = "https://mynormh.com";

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = "snickers";
// export several named exports at once
export { age as old, dog };

// default export
// const apiKey = "abc123";

// export default apiKey;
