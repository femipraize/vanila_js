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


// string and its properties
const s = 'hello world';

const sliptExample = 'Technology, computer, it, code';


console.log(s.length);
console.log(s.toLocaleUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

console.log(sliptExample.split(','));

// Arrays - varriables that holds multiple values

//old way
const number = new Array(1,2,3,4,5);
console.log(number);

//new way
const fruits = ['apples', 'oranges', 'pears'];
fruits.push('mangos'); // this is to add to the array
fruits.unshift('strawberries'); //this is to add to the begging of the array
fruits.pop(); // this is to take the last one off the array

console.log(Array.isArray(fruits)); //this is to check if this is an array
console.log(fruits.indexOf('oranges')); // checking the index of the array
console.log(fruits);

// Object Literals

const person = {
    firstName: 'Felix',
    lastName: 'Ogbangwor',
    age: 32,
    hobbies: ['Music', 'Movies','Sport'],
    address: {
        street: '9, Jimoh Oladeinde street',
        city: 'Gbagada',
        state: 'Lagos'
    }
}

person.email = 'femzy@gmail.com';

console.log(person.firstName,person.lastName)

console.log(person.hobbies[1], person.address.city)

// Using destructuring
const {firstName, lastName, address:{ city}} = person;

console.log(firstName,city);

console.log(person)

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos)