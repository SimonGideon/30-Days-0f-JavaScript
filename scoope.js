// let iAmGlobal = 'sameValues'
// if (true) {
//     console.log(iAmGlobal);
//     let iAmLocal = 'iAmLocal';
//     iAmGlobal = 'superman'
//     console.log(iAmGlobal);
// } else {
    
// }
// console.log(iAmGlobal);

// Kings Teritory problem
let king = 'John'
if (true) {
    let king = 'Sam'
    if (true) {
        let king = 'Ram'
        console.log(king)
    }
} 
if (true) {
    console.log("Iam the second part" +king)
}