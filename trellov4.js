const myTodos = ['Buy Bread', 'Go to gym', 'Record YOutube Videos'];
// console.log(myTodos.indexOf('Buy Bread'));
const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to gym',
    isDone: false,
}, {
    title: 'Record Youtube Videos',
    isDone: true,
}];

// const index = newTodos.findIndex(function(todo, index){
//     return todo.title === 'Go to gym'
// })
// console.log(index);
// function findToDo(myTodos, title){
//     const index = myTodos.findIndex(function (todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }
// let printMe = findToDo(newTodos, 'Go To gym')

function findToDo(myTodos, title){
    const titleReturned= myTodos.findTodo(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}
let printMe = findToDo(newTodos, 'Go To gym')