//setters and getters
class User5{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return `Hello`;
    }
    greeting(){
        return `${this.speak()} ${this._name}`;
    }
    get #uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new User5('Beder', 25);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);