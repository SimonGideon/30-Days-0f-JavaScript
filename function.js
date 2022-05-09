function sayHello(name){
    console.log(`Hey ${name} greeting`)
    console.log("New User" + name)
}
sayHello('John');

function fullNameMaker(firstName, lastName){
    console.log(`Welcome to LCO`)
    console.log(`Happy to have you, ${firstName} ${lastName}`)

}
fullNameMaker('John', 'Doe')

function myAdder(num1, num2) {
    let added = num1+num2;
    return added;
}
console.log(myAdder(1232, 353453))