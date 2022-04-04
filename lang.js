// function translatePigLatin(str) {
//   vowel = ['a', 'e', 'i', 'o', 'u'];
//   for(i=0; i<str.length; i++){
//   let deleted = str.substring([i]);
//   append = deleted + str[i]+"ay";
//   present = vowel.includes(str[i]);
//   if(present == true){
//     return console.log(str + "way");
//   } else{
//     return console.log(append);
//   }
//   }
// }

// translatePigLatin("kkalgorithm");
// =======><========
function translatePigLatin(str) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let deleted = str.substring(1);
  let present = vowel.includes(str[0]);
  if(present == true){
    return console.log(str + "way");
  }else{
    for(let i=0; i<str.length; i++){
  if(vowel.includes(str[i])){
            return console.log(str.slice(i, str.length) + str.substring(0, i) + 'ay');   
   }
}
  }
}
translatePigLatin("schwartz");