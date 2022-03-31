function translatePigLatin(str) {
  vowel = ['a', 'e', 'i', 'o', 'u'];
  for(i=0; i<str.length; i++){
  let deleted = str.substring([i]);
  append = deleted + str[i]+"ay";
  present = vowel.includes(str[i]);
  if(present == true){
    return console.log(str + "way");
  } else{
    return console.log(append);
  }
  }
}

translatePigLatin("kkalgorithm");