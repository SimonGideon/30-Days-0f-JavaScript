// if(true){
//     console.log('I am inside a if block');
//     console.log('I am inside a if block');
//     console.log('I am inside a if block');
    
// } else{
//     console.log('I am inside a else block');

// }
var whoIsHere = 'teacher';
if(whoIsHere==='user'){
    console.log('Greating message for user')
    console.log('Allow access to all content')

} else if(whoIsHere==='teacher'){
    console.log('Greating message for Teacher')
    console.log('Allow access to his courses')
} else{
    console.log('Please Verify your email')
    console.log('Send user verification')


}
// grade problem
//  10 -Amaizing;
// 5 - Good
// 3 - Poor
// 0 - Fail
function grade(marks)
{if(marks==10){
    console.log('Amaizing');
} if (marks==5) {
    console.log('Good')
    
} if (marks==3) {
    console.log("Poor")
} if(marks==0) {
    console.log("Poor")
}}
grade(10);
