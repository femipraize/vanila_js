
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
    } else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

      userList.appendChild(li);

      //Clear feilfs
      nameInput.value = '';
      emailInput.value = '';
    }
}

// Targeting element (# for targetting id, . for targetting class)









// Selector
// Single element selector
// console.log(document.getElementById('my=form'));
//console.log(document.querySelector('h1'));


// Multiple element seclector
//console.log(document.querySelector('.item'));


// Looping through item
 //const items = document.querySelectorAll('.item')
 //items.forEach((items) => console.log(items));


 //const ul = document.querySelector('.items')

 //ul.remove();
 //ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'I Did it';
//ul.children[1].innerHTML = 'Femi';
//ul.lastElementChild.innerHTML = '<h1>Feels Good</h1>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

// Working with events or event listner
//const btn = document.querySelector('.btn');

//btn.addEventListener('mouseover', (e) => {
    // This is to prevent default behavior
  //  e.preventDefault();
  //  document.querySelector('#my-form').style.background = '#ccc';
  //  document.querySelector('body').classList.add('bg-dark');
  //  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//});
/*
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

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For

for(let i = 0; i<=10; i++){
    console.log(`for loop number ${i}`);
}

// while 
let i = 0;
while(i <= 10) {
    console.log(`for loop number ${i}`);
    i++;
}

// Looping throuh the Todos Array using a forloop
for(let i = 0; i<todos.length; i++){
    console.log(todos[i].text);
}

// Looping through the Todos Array using for of
for (const todo of todos) {
    console.log(todo.text)
}

// Using the high order array method
// forEach: this loops through the array
todos.forEach(function(todo){
    console.log(todo.id);
});

// map: it allow us to create new array from an array
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

// filter: it allows us to create an array based on a condition
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

// Array method chainning
const methoChaining = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(methoChaining);

// Conditionals
const xTest = 20;

if(xTest === 10) {
    console.log('x == 10');
} else if(xTest > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

const buzz = 4;
const bazz = 11;

if(buzz > 5 || bazz > 10) {
    console.log(' buzz is more than 5 or bazz is more than 10')
}

// ternary operator

const checkX = 10;

const color = checkX > 10 ? 'Red' : 'blue';

console.log(color)

// SWitch

switch(color) {
    case 'Red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

// Functions
function addNumber(num1 = 1, num2 = 1) {
    return num1 + num2
}

console.log(addNumber(5, 5));

// Arrow function
const addNumber2 = (num1, num2) => {
    return num1 + num2
}

console.log(addNumber2(7, 9));

// Can also work this way for arrow functions 
const addNumber3 = (num1, num2) => num1 + num2
console.log(addNumber3(20, 40));


// Basic Object Oriented programming in ES5 

//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

//Using prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate objecct
const person1 = new Person( 'Femi', 'Ogbangwor', '2-17-1990');
const person2 = new Person( 'Abraham', 'Ariyo', '2-17-1991');

console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person2.dob);



// OOP in ES6 Sytaxtic sugar
// Class

class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


// Instantiate objecct
const person1 = new Person( 'Femi', 'Ogbangwor', '2-17-1990');
const person2 = new Person( 'Abraham', 'Ariyo', '2-17-1991');

console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person2.dob);

*/
