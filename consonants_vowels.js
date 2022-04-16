function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const stringarray = s.split('');
  for(let i=0; i < s.length; i++){
    for(let j=0; j < vowels.length; j++){
      if(s[i] == vowels[j]){
        console.log(s[i]);
      }
    }
  }
  const consonants = 'bcdfghjklmnpqrstuvwxyz';
  for(let i=0; i<s.length; i++){
    for(let j=0; j< consonants.length; j++){
      if(s[i] == consonants[j]){
        console.log(s[i]);
      }
    }
  }

}
vowelsAndConsonants("javascript");
