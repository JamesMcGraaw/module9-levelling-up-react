const personDescription = (name: string, city: string, age: number): string => {
    return `${name} lives in ${city} and is ${age} years old.`;
}

console.log(personDescription('Jim', 'Newport', 23));

const returnTheSameThingAsTheInput = <Type>(arg: Type): Type => {
    return arg;
}

let input1: number = 3;
let result1: number = returnTheSameThingAsTheInput(input1);
console.log(typeof result1)

let input2: string = 'blah';
let result2: string = returnTheSameThingAsTheInput(input2);
console.log(typeof result2)
