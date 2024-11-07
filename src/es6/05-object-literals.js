//enhanced object literals

function newUser(user,age,country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Beder', 25, 'PE', 1));