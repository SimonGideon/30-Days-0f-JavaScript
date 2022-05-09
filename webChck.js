let userEmail = 'abc123abc';
let password = '1234';

function userChecker(myString){
    if ((myString.includes(123)) && (myString.length>6)) {
        return true
    }else{
        return false
    }
}
function passChecker(pass){
    if ((pass.includes(1234)) && (pass.length>8)) {
        return true
    }else{
        return false
    }
}
