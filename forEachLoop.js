const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

days.forEach(function(day, index) {
    console.log(`starts with ${index+1} -- ${day}`);
})
// Using for Each
 const months = ['Jan', 'Feb', 'Mar', 'Apri', 'May', 'June',
 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 months.forEach(function(months, index){
     console.log(`starts with ${index+1} -- ${months}`);

 })
//  using for loop
 for (let i = 0; i < months.length; i++) {
     const element = months[i];
     console.log(`starts with ${i} --- ${element}`)
     
 }
//  recversed
for (let i = months.length-1; i >=0; i--) {
    const element = months[i];
    console.log(`starts with ${i} --- ${element}`)
    
}