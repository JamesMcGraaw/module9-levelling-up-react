"use strict";
const personDescription = (name, city, age) => {
    return `${name} lives in ${city} and is ${age} years old.`;
};
console.log(personDescription('Jim', 'Newport', 23));
const returnTheSameThingAsTheInput = (arg) => {
    return arg;
};
let input1 = 3;
let result1 = returnTheSameThingAsTheInput(input1);
console.log(typeof result1);
let input2 = 'blah';
let result2 = returnTheSameThingAsTheInput(input2);
console.log(typeof result2);
