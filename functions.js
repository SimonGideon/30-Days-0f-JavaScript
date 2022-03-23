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