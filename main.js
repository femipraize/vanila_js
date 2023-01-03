console.log('Hello World');
console.error('This is an error');
console.warn('this is a warning');

// Data types

// Primitive data types
// String, Number, Boolean, null, undefine

const name = 'John';
const age = 30;
const rating = 4.6;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatination
console.log('My name is ' +name+ 'and i am ' +age)
//ES6 or Es2015
//template string/ template leterals
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);