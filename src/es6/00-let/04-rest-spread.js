// array destructuring

let fruits = ['apple', 'banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);//apple banana

// object destructuring

let user = {username: 'Beder', age: 25};
let {username, age} = user;
console.log(username, user.age);//Beder 25

// spread operator
let person = {name: 'Beder', age: 25};
let country = 'PE';
let completePerson = {id:1, ...person, country};
console.log(completePerson);//{name: "Beder", age: 25, country: "PE"}

// rest operator

function sum(num, ...nums){
    console.log(nums);
    console.log(num + nums[0]);
    return num + nums[0];
}

console.log(sum(1,2,3,4,5));//3
