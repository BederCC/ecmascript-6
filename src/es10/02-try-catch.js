try{
    hello();
}
catch (error){
    console.error(error);
}

try{
    anotherFn();
}
catch{
    console.error('This is a catch without error');
}