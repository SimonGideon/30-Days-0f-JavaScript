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
function myMultiplier(num1, num2){
    return num1*num2;
}
console.log(myMultiplier(12, 12))

// course count
function guestUser(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and your course is: ' + courseCount

}
console.log(guestUser('John', 1));
