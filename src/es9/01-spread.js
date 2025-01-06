const user = {username: 'beder', age: 30, country: 'Mexico'};
const {username, ...rest} = user;
console.log(username); // beder
console.log(rest); // { age: 30, country: 'Mexico' }