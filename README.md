![](https://thumbs.dreamstime.com/b/javascript-gold-text-black-background-d-rendered-royalty-free-stock-picture-image-can-be-used-online-website-banner-87916218.jpg)
# 30-Days-0f-JavaScript
This is a series of leaning and practicing JavaScript for 30 Days
# Day 1
  # Introduction
  
   ## Syntax
  These are rules that governs a Java Script as a programing language. THis involves:
    1. Declaring of different variables.
    2. Commenting
    3. Printing out
   ## Varriables
  These are storage containers for data in a code.  They are declared using assignment operator(=). For you to call a variables in Javascript, we use the key words, **const**(when the declared varriables is unchanged) and **let**(when the declared varriable is compromised). (var -  is an old school way of declaring variable and is efficient with the old Javascript lines of code. But with the latest version of Javascript it may result errors that may lead to a long hours of deburging so just avoid using var).
  Functional proramming languages such as [**Scala**](https://www.scala-lang.org/) and [**Elarng**](https://www.erlang.org/) that forbid change of variable values.
   ### Naming of Variables in Javascript
   * The name must contain only letters , digits and symbols; $(dollar) or _ (underscore).
   * The first character must not be a digit/number
      #### Name your varriables like a pro in Javascript
      > Variable naming technique brings a distinction between an experienced programmer and a novice. 
        ##### How to name varriables like a pro.
        * Use human-readable names
           ```javascript
           const userName = Admin;
           ```
        * Avoid abbreviations.
           ```javascript
            let a = "Today";
             b = "Wednesday";
             ///calling a variable in a  line variable is applicable but since we want to code like a **pro**, we use different lines
            ```
        * Use maximum Decriptive names (Verbose Variables).
        * Agree to the terms with you collegeus, team or coding patners.
          > Avoid subtle code (Difficult to analyse)
        #### Menthods of naming variable technique.
        1. camelCase
        ```javascript
        let currentUser = "admin";
        ```
        2. snake_case
        ```javascript
        let user_name = "admin";
        ````
        3. PascalCase
        ```javascript
        let UserName = "admin";
        ```
        4. Hungarian - The variable name starts with the datatype notation
        ```javascript
         let strUserName  = "admin";        
        ```
       
     
      
      
   ## Data Types
   There are 8 (eight) known datatypes in javascript:
   #### 1. Numbers
   This represent both interger and floating points.
      Apart from regular number are other ones callled special numbers:
      * **Infinity**. These are endeless values. Just like mathematical infinity, javascript contain these as a special numerical values. (∞ and -∞).
        > A number divided by zero returns an infinity vlaue.
      * **NaN**. When performing a mathematical computation with a number a non-numeric type retuns a NaN error.
        > However with this strange characteristics, the special numeric value still remain to the numeric data type.
   #### 2. BigInt
   Holds very big and small numbers that cannot be held by type 'number'. They include [cryptography](https://en.wikipedia.org/wiki/Cryptography) or microseconds-precisions timestamps.
   #### 3. String
   ##### a. Creating a string
   strings are named inside a quotation marks. 
   ```javascript
      let firstName = "John";
   ```
   Strings can also be enclosed in single quotation marks.
   ```javascript
      let firstName = 'John';
   ```
   And also on backtick.
   ```javascript
      let firstName = `John`;
   ```
   ##### b. Escaping character in astring
   One cannot involve a quotaion marks inside a string. This will bring an error. To solve this one add a backslash "\" slash to skip the marks.
   ```javascript
   const yourNationality = 'I'm a Kenyan';  
   console.log(yourNationality);
   /*This yield an error to solve this proceed to the next line*/
   ```
   ```javascript
   const yourNationality = 'I\'m a Kenyan';
   console.log(yourNationality);
   ```
   ##### c. Including expressions in strings.
   We can perform an arithmetic inside a string.
   ```javascript
   const movieName = "Bad Lands";
         productionYear = 1991;
         yearWatched = 2022;
   let statement = "I wached ${movieName}, ${yearWatched - productionYear} year late,";
   console.log(statement);
         
   ```
   ##### d. Multi string breakin.
   To push a tring to the next line in the output we use "/n"
   ```javascript
   myRatings = "I love the movie. /nI give a rating of 8 out of 10";
   console.log(myRatings);
   ```
   ##### e. String concantenating.
   Strings can be concatinated using "+" operator.
   ```javascript
    let greetings = "Good";
        time = "Morning";
    console.log(greetings +" "+time);
   ````
   ##### f. String Methods and Properties
   A method is function that is built into data types.
   * String slice( ): 
   
        It takes two arguments; start and end. It takes both negative and positive values.
        ```javascript
            let wildAnimals = "Zebra", "Giraffe", "Lion";
                carnivore = wildAnimals.slice(16, 0);
                console.log(carnivore); /*This returns the Value Lion because is in the range of the index provided*/
        ```
   * Subrtring( )
        This works similar with slice, the obly different is that this takes only positive values. Negative values are not accepted in this.
        ```javascript
            let animals = "Cow", "Goat", "Monkey", "Hen";
                wildAnimals = animals.substring(11,5); /*This will return "Monkey" as our output*/
        ```
   * Replacing string content replace( )
   This takes to arguments, the first is the string to be repaced and strings to be replaced with consecutively. 
   ```javascript
      let sentence1 = "I love javascript";
          refined = sentence1.replace("love", "like");
          console.log(refined); /*This outputs a new string*/
   ```
   This method property is case sensive.
   > With the above example,  whe the word "love" is replaced with capital 'L' at the beginning the re will no change the output.
   ```javascript
      let sentence1 = "I love javascript";
          refined = sentence1.replace("Love", "like");
          console.log(refined); /*This outputs a nothing*/
   ```
   To replace a string without bring to consideration of case, we use "/i" flag which is insensitive.
   ```javascript
   let sentence1 = "I love javascript";
          refined = sentence1.replace(/LOVE/i, "like");
          console.log(refined); /*This outputs "I like javascript"*/
   ```
   > Review the above code to note the difference.
   "/g" flag replace regulary expressions with a global match i.e all value that meets the specified strings ill be replaced.
   ```javascript
   let sentence1 = "I love javascript, all my friends knows that I love it";
          refined = sentence1.replace(/love/g, "like");
          console.log(refined); /*This will replace all the "love" in sentence one with "like"*/
   ```
   ###### Properties of replace()
   1. It replaces the first match unless specified with the global.
   2. It is case sensitive unless specified.
   3. Returns a new string
   
 * Converting String Case
   Strings can be converted into either upperCase or lowerCase using javascript
   This can be archieved using the following string methods
       * .toLowerCase( ) - Lower Case
       * .toUpperCase( ) - Upper Case
       
        ```javascript
            let sentence1 = "The world is evolving very first in Technology";
            sentenceUpper = sentence1.toUpperCase();
            sentenceLower = sentence1.toLowerCase();
            console.log(sentenceUpper);
            console.log(sentenceLower);
         ```
  * Extracting string character.
    The following  methods can be used to extract strings:
       * charAt( ) --> Takes arument position.
            ```javascript
            let text1 = "Hello";
            text = charAt(0);
            console.log(text);
            ```
      * charCodeAt( ) -->  This method returns the unicode of the character at a specified index in a string returns a UTF-16 code (an integer between 0 and 65535).
        ```javascript
        let day = "Monday";
            text = charCodeAt(0);
            console.log(text);
        ```
      * Property access[ ].
       ```javascript
       let car = "Benz";
            text = car[0];
            console.log(text);
       ```
  *  


   #### 4. Boolean(Logical Type).
   This checks for true or false.   
   #### 5. Null value.
   The unknow value.
   ```javascript
   const age = null; /*age is not known*/
   ```
   #### 6. The undefined value
   This a value not assigned.
   #### 7. Object and symbols.
   Stores collection of data and more complex entities.
   **Symbols** - Creates a unique identifier for the objects.
