const array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// The negative index is a new feature in ECMAScript 2022. It allows you to access the array elements from the end of the array.
console.log(array[array.length -1]); // 10
// The at() method takes an integer value and returns the item at that index, counting from the end of the array.
console.log(array.at(-1)); // one