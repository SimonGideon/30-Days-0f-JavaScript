let myArrya = ['name', 33, true];
let myYoutubeVideo1 = {
    title: 'Loops in Javascript',
    videoLength: 15,
    videoCreator: 'Simon',
    videoDescription: 'this is a video description and a long one',

}
let myYoutubeVideo2 = {
    title: 'functions in Javascript',
    videoLength: 10,
    videoCreator: 'Simon',
    videoDescription: 'this is a video description and a long one',
}

console.log(`A video on ${myYoutubeVideo2.title} video by ${myYoutubeVideo2.videoCreator}`)

let jsCourse = {
    name: 'Simon',
    price: 250,
    description: 'Agile js',
}
console.log(`Hey there is new course by ${jsCourse.name} of this ${jsCourse.description} and  with this ${jsCourse.price}`)
function changeVideoLength(myObject){
    return{
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1},`
    }

}
let addOne = changeVideoLength(myYoutubeVideo1);
console.log(addOne.formatOne);
