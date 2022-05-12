// const myElemnt = document.querySelectorAll("#idone");
// console.log(myElemnt)
// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am beign changed using js'
// console.log(myPElements)

const myPElements = document.querySelectorAll('p')
myPElements.forEach((p)=> p.textContent = 'I am changed using js Loop')