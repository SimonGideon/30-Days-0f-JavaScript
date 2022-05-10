// // function sayHello(name) {
// //     return "Hey there, " + name + "!";   
// // }
// // console.log(sayHello("Summy"))
//  const sayHello = (name) => `Hey there, ${name} !`;    
// console.log(sayHello("Summy"));
// const todos = [{
//     title: 'Buy Bread',
//     isDone: true,
    
// },
// {
//     title: 'Attend an online class',
//     isDone: false,
// },{
//     title: 'Read an Agile code book',
//     isDone: false,

// },{
//     title: 'Meditation',
//     isDone: false,
// },
// {
//     title: 'Go to gym',
//     isDone: true,
// }, {
//     title: 'Record Youtube Video',
//     isDone: false,
// }]

// const thingsDone = todos.filter((todo)=> todo.isDone ===false)
// console.log(thingsDone(title));
const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This canon camera is of ${this.price}`
    }
}
console.log(cameras.myDes())

// const func=() => ({key: 'value'});