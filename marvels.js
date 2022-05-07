// // Arrays: 
// const supperHeros = ['Iron Man', 'Spider Man', 'Tho', 'Captain America'];
// console.log(supperHeros)
// console.log(supperHeros[0])
// console.log(supperHeros[supperHeros.length-1]);
// let length = supperHeros.length;
// console.log(`There are ${length} super Heroes`)
// console.log(length);
 const numbers= ['one', 'two', 'three', 'four', 'five', 'six'];
 numbers[1] = 'SOMETHING';
//  console.log(numbers)
//   start
// number shif
numbers.shift()
console.log(numbers)
 console.log("---------------Sep-------------")
 numbers.unshift("SOMETHING");
 console.log(numbers)
// end
console.log("---------begin end---------");
numbers.pop();
console.log("Element to be deleted is" + ' ', numbers.pop())
console.log("-----------Push------");
numbers.push("Seven");
console.log(numbers)

// middle
console.log("------------Middle-----------");
numbers.splice(2, 1, "TWENTY")
console.log(numbers)