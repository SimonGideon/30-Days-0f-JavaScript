// function that finds a square of a number.
function square(num){
    let squared = num*num;
    console.log(squared);
}
square(50);

// finding the sum function.
function sum(num1, num2){
    const add = num1 + num2;
    console.log(add);
}
sum(75, 50);

// full names function
function fullNames(){
    let firstName="Alia";
    let middleName = "Amada";
    let lastName = "Son";
    let allNames= firstName.concat(' ', middleName, " ", lastName);
    console.log(allNames);

}
fullNames();
// area of a rectangle
function area(length, width){
    return length * width
}
area(30, 50);
// converting the above standard functions into error function.
console.log("------Error Function------")
let erSquare=num =>{
    let squared = num*num;
    console.log(squared);
}
square(50);

console.log("--------");
// Write a function called add7 that takes one number and returns that number + 7.
function add7(num){
    return num+=7;
};
