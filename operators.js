// && operator both sides needs to be true
// || - OR operator one side needs to be true

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;
if (isVerified && isLoggedIn && hasPaymentToken ) {
    console.log('Greating message to user')
    console.log('Grant access to paid course')

} else if (isVerified || isGuest) {
    console.log('Allow free previews')
    
}else{
    console.log('please contacty admin')
}

