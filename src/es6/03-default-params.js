function newUser(name, age,country){
    var name = name || 'Beder';
    var age = age || 25;
    var country = country || 'PE';
    console.log(name, age, country);
}

newUser();

newUser('Jorge', 30, 'MX');


//ES6
function newAdmin(name = 'Beder', age = 25, country = 'PE'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Jorge', 30, 'MX');