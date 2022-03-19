// creating strings
const string = 'The revolution will not be televised';
console.log(string);
/*we use backward slash to escape characters in sa string */
const bigmouth = 'I\'ve got it right in my place..';
console.log(bigmouth);
/*single quates and double quotes are both used to wrap up strings */
// concatinating strings
const firstName = "John"; 
const lastName = "Doe";
const joined = `${firstName} ${lastName}`;
const song = 'Fight the youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore*100}%.`;
console.log(output);
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(1, 4));
let largeTechCompany = "Microsoft Google";
finale = largeTechCompany.replace("Microsost", "Tesla");
console.log(finale);
// changing  string case using case methods 
letupperCase = finale.toUpperCase();
    lowerCase = finale.toLowerCase();
console.log(upperCase, lowerCase);
// concant() method - to join two differnt strings.
    lastText = lowerCase.concat(" ", upperCase);
    // also one can add "+" operator before the string or variable string to do the same work as concat() method.
    lastText = lowerCase+ " " +upperCase;
    console.log(lastText);
