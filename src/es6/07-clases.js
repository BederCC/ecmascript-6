// declare a class
class User{};
// create a new instance of the class
const newUser = new User();

class User2{
    //metodos
    greeting(){
        return 'Hello';
    }
}

const beder = new User2();
console.log(beder.greeting());

const bebeloper = new User2();
console.log(bebeloper.greeting());

class User3{
    //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return `Hello`;
    }
}

const beder3 = new User3();

//this
class User4{
    constructor(name){
        this.name = name;
    }
    speak(){
        return `Hello`;
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User4('Ana');
console.log(ana.greeting());

//setters and getters
class User5{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return `Hello`;
    }
    greeting(){
        return `${this.speak()} ${this._name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new User5('Beder', 25);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);