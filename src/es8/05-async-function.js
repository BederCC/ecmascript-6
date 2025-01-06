const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async Hello World'), 5000)
        : reject(new Error('Error'))
    })
};
//
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Another function');
}

console.log('Before');
anotherFn();
console.log('After');