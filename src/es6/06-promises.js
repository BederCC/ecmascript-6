const anotheFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });   
}

anotheFunction()
    .then(response => console.log(response)) // Hey!
    //se puede encadenar otro then
    .catch(error => console.log(error)); // Ups!