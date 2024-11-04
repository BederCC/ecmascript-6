let hello = 'Hello';
let world = 'World';
let greeting = hello + ' ' + world;
console.log(greeting); // Hello World

//template literals
let greeting2 = `${hello} ${world}`;
console.log(greeting2); // Hello World

//multiline strings
let lorem = 'Lorem ipsum dolor sit amet\n'+', consectetur adipiscing elit.'

let lorem2 = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.`
console.log(lorem);
console.log(lorem2);