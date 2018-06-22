// 4/22/18

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

var hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

//=======================================================================================================

// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year / 100);
  }

//=======================================================================================================

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height){return length * width * height};

  return Kata;

})();

//=======================================================================================================


// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

//Your mission: 
//Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let currDate = new Date(currentDate);
  let expDate = new Date(expirationDate);
  
  if (enteredCode === correctCode && currDate <= expDate) {
    return true;
  } else {return false;}
}

//=======================================================================================================


//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.reduce((a, b) => {
    if (typeof b === 'number') a.push(b);
    return a;
  }, []);
}

//=======================================================================================================

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a,b) {
  return (a + b).toString(2);
}

//=======================================================================================================

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 

function sumDigits(number) {
  let arr = Math.abs(number).toString().split('')
  let arrr = arr.map(parseFloat).reduce((a, b) => a + b);
  return arrr;
}

//=======================================================================================================

// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

function order(words){
  return words
    .split(' ')
    .sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}

//=======================================================================================================

// Get the number n (n>0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
  let seq = [];
    for (var i = n; i >= 1; i--) {
      seq.push(i);
    }
    return seq;
  };

//=======================================================================================================

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  var i;
  var j;
  str = str.toLowerCase();

  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

//=======================================================================================================

// Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighboring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

function songDecoder(song){
  song = song.replace(/(WUB)+/g, " ").trim()
  return song;
}

//=======================================================================================================

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

//Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
  let list = [];
    for (var i=0; i < data.length; i++) {
      if ((data[i][0] >= 55) && (data[i][1] > 7 )) {
        list.push('Senior')
      } else {list.push('Open')}   
    }
    return list;
  }

//=======================================================================================================

// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

function toBinary(n){
  return Number(n.toString(2));
}

//=======================================================================================================

// Write function potatoes with

// int parameter p0 - initial percent of water-
// int parameter w0 - initial weight -
// int parameter p1 - final percent of water -
// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

let potatoes = (p0, w0, p1) => parseInt(w0 * ((100 - p0 )/( 100 - p1)));


//=======================================================================================================

// Find the total sum of angles in an n sided shape. N will be greater than 2.

let angle = n => 180 * (n - 2);

//=======================================================================================================

//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let arr = args.sort((a, b) => a - b);
      return arr[0];
  }
}

//=======================================================================================================

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

let positiveSum = (arr) => {
  return !arr.length ? 0 : arr.reduce((c,i) => i > 0 ? c+i :c,0);
}

//=======================================================================================================

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

let feast = (b,d) =>  (b[0] === d[0] && b[b.length-1] === d[d.length-1]);

//=======================================================================================================

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [new Man("Adam"), new Woman("Eve")];
    }
  }
  
  class Human{
    constructor(name) {
      this.name = name;
  }}
  class Man extends Human{
  constructor(name){
    super(name)
  }}
  class Woman extends Human{
  constructor(name){
    super(name)
  }}

//=======================================================================================================

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().

let expressionMatter = (a,b,c) => Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

//=======================================================================================================

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

var combat = (health, damage) => health - damage >= 1 ? health - damage : 0;

//=======================================================================================================

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  var str = n.toString()
  var arr = str.split('')
  if (arr[0] === '0'){
    return parseInt(arr.join(''))
  }
  for (var i = arr.length-1; i > 0; i--){
    if (arr[i] === '0' ){
      arr.splice(i,1)
    } else {
      return parseInt(arr.join(''))
    }
  }
}

//=======================================================================================================

//You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

//The returned value must be a string, and have "***" between each of its letters.

//You should not remove or add elements from/to the array.


function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

//=======================================================================================================

//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {return 0}
}

//=======================================================================================================

//Write a function/method named isMadhavArray/IsMadhavArray/is_madhav_array() that returns true if its array argument is a Madhav array, otherwise it returns false.

//A Madhav array a has the following property.

// a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

function isMadhavArray(arr){
  if(arr.length < 3) return false;
  var i = 1, counter = 2;
  while(i<arr.length) {
    var sum = 0;
    for(var j=1; j <= counter; j++, i++)
      sum += arr[i]; 
    
    if(sum !== arr[0])
      return false
    else counter++;
  }
  return true;
 }

 //=======================================================================================================

//  Modify the kebabize function so that it converts a camel case string into a kebab case.


 function kebabize(str) {
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase() 
}

//=======================================================================================================

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

const sortArray = (array) => {
  let counter = 0
  let odds = array.filter( elem => {
    return elem % 2;
  })
  odds.sort((a, b) => a - b);
  let result = array.map( elem => {
    if(elem % 2) {
     counter++;
     return odds[counter - 1];
    } else {
      return elem;
    }
  })
  return result
}

//=======================================================================================================

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.

// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name){
	var nameArray = name.split(' ');
	return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//=======================================================================================================

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

var basicOp = (op, val1, val2) => {
  if (op === '+') {
    return val1 + val2
  } else if (op === '-') {
    return val1 - val2
  } else if (op === '*') {
    return val1 * val2
  } else if (op === '/') {
    return val1 / val2
  } else {
    return 0
  }
}

//=======================================================================================================

//You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, sharkSpeed = how fast it can move in metres/second, pontoonDistance = how far you need to swim to safety in metres, youSpeed = how fast you can swim in metres/second, dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

//If you make it, return "Alive!", if not, return "Shark Bait!".

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin === true) {
    sharkSpeed = sharkSpeed / 2;    // Checking for a dolphins presence, if so, half the sharks speed.
  }
  // if the value returned from your distance to the boat divided by your speed is greater than the sharks, then you are shark bait.
  return pontoonDistance / youSpeed > sharkDistance / sharkSpeed ? "Shark Bait!" : "Alive!";
};

//=======================================================================================================

// Write a function to split a string and convert it into an array of words. For example:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

var stringToArray = (str) => str.split(' '); // splits string into an array at the first index with a space

//=======================================================================================================

//Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"

function remove(s, n) {
  for (let i = 1; i <= n; i++) { // Loop over the string n amount of times to remove 1 ! each time.
    s = s.replace('!', ''); //Removes the space containing a ! each time it loops
  }
  return s;
}

//=======================================================================================================

//Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
  let unique_array = a.filter(function(e, i, self) { // create a new array and if the index of the element in the original array equals the index return that value.
        return i == self.indexOf(e);
    });
    return unique_array
};

//=======================================================================================================

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks){
  let sum = marks.reduce((a, b) => a + b) / marks.length; // Sums up the marks array and divides them by the length of the array.
  return Math.floor(sum); // rounds all decimals down
}

//=======================================================================================================

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

function stringy(size) {
  string = "1"; // Starts the string with a 1
  for (var i = 0; i < size-1; i++) {
    if(i % 2 == 0)
      string += "0"; //gives even indexes a 0
    else
      string += "1"; // gives odd indexes a 1
  }
  return string;
}

//=======================================================================================================

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  let chromo = sperm.split('').includes("Y"); // creates an array and checks if one of the indexes includes a Y.
    return (chromo === true ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.")
    // if so return son if not return daughter
}

//=======================================================================================================

// Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

var isDivisible = (n, x, y) => {
  return (n % x === 0 && n % y === 0 ? true : false)
}

//=======================================================================================================

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

var fakeBin = (x) => {
  return x.split('').map(function(e){return e < 5 ? 0: 1;}).join('');
} // split the string and map over the array returning 0 for elements less than 5 else return 1 and join back to a string.

//=======================================================================================================

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array:

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0)
    return []; // check if null or 0 and return an empty array
  
  var positive = 0; // create positive and negatives count and sum
  var negative = 0;
  
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive; // if value is less than zero add 1 to the positive counter
    else
      negative += input[i]; // if its negative add that value to the negative sum
  }
  
  return [positive, negative]; // return both values as an array
}

//=======================================================================================================

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function() {
  var output = ''; // create an empty string to set later.
  for (var i = 0; i < this.length; i++) {
    // since we are making a prototype we can use this to target the string.
    if (this[i].toLowerCase() === this[i]) { // if the index changed to lowercase is equal to the original value of the index, than change it to uppercase in the output.
      output = output + this[i].toUpperCase();
    } else if (this[i].toUpperCase() === this[i]) { // if the index changed to uppercase is equal to the original value of the index, than change it to lowercase in the output. 
      output = output + this[i].toLowerCase();
    } else { // if there is a number or non alphabetical character than keep it the way it is.
      output = output + this[i];
    }
  }
  return output;
}

//=======================================================================================================


// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
  let index = haystack.indexOf('needle');// sets the index of 'needle' in every array
  return `found the needle at position ${index}`;// returns string with the index using string interpolation.
}

//=======================================================================================================

// Complete the solution so that it reverses the string value passed into it.

var solution = (str) => str.split('').reverse().join('');

// chaining the split reverse and join string prototypes

//=======================================================================================================

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

const correct = string => {
  return string
    .split('')
    .map(char => {
      if (char === '5') return 'S' // make a copy of the array, if any input equals 5, 0, 1, return an S, O, I in its place
      if (char === '0') return 'O'
      if (char === '1') return 'I'
      return char
    })
    .join('') // join the array back into a string
}

//=======================================================================================================

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	return x.replace(/\s/g, ''); // Replaces any whitespace found in the string with nothing, essentially deleting it. Regex
}

//=======================================================================================================

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there

var number = function(busStops){
  var people = 0; // create a counter for people
  for (var i = 0; i < busStops.length; i++) {
    people = people + busStops[i][0] - busStops[i][1]; // subtract the number of people who get off the bus from the ones who get on and add that to the people counter to keep track of the total.
  }
  return people;
}

//=======================================================================================================

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

var replace = (s) => s.replace(/[aeiou]/gi,"!");

// String.prototype.replace takes in a regular expression that selects any single character inside of [], case insensitive, and replaces them with an "!".

//=======================================================================================================

// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

const digitize = (n) => String(n).split('').reverse().map((x)=> Number(x));

// Change the data type of n to a string so it can be split into an array and reversed. 
// Map the array returning each elements data type turned back to a number in reverse order.

//=======================================================================================================

// 8 kyu
// Sleigh Authentication

// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false; 
};

//=======================================================================================================

// 8 kyu
// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool === true ? "Yes" : "No";
}

//=======================================================================================================

//8 kyu
// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

//=======================================================================================================

// 8 kyu
// Sum of Multiples

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

const sumMul = (n, m) => {
  if (n >= m) return 'INVALID' // Since we are using m as the ceiling, it must be greater than n or "INVALID"
  const multiples = [] //Create an array to push values to
  for (let i = n; i < m; i++) {
    if (i % n === 0) multiples.push(i) // Create a loop where i is equal to the value of n and as long as it is less than m increment up my 1. to pick out the multiples, check if there is no remainder and push that number to the multiples array.
  }
  return multiples.reduce((total, value) => total + value, 0) // reduce the multiples array down, adding all values and return.
}

//=======================================================================================================

// 8 kyu
// Cat years, Dog years

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
  return [humanYears,(humanYears - 1 ? 16 : 11 ) + 4 * humanYears,(humanYears > 1 ? 9 + (5 * (humanYears - 2)) : 0) + 15];
} 

//=======================================================================================================

// 8 kyu
// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return parseInt(bin, 2); // 
}

//=======================================================================================================

// 8 kyu
// Hex to Decimal

// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
  return parseInt(hexString, 16)
}

//=======================================================================================================

// 8 kyu
// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

const getSize = (w, h, d) => {
  let area = 2*(d*w) + 2*(d*h) + 2*(w*h)
  let volume = w * h * d
  return [area, volume];
};

//=======================================================================================================

// 6 kyu
// Title Case

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
  if (typeof minorWords !== "undefined") {    // checks to see if a minor words argument was even passed through
    var minorWords = minorWords.toLowerCase().split(' ');
  } else {
    var minorWords = []; // returns an empty array if no argument was passed 
  }
  
  return title.toLowerCase().split(' ').map(function(word, i) {
    if (word != "" && ((minorWords.indexOf(word) === -1) || i == 0)) {
      word = word.split('');
      word[0] = word[0].toUpperCase();
      word = word.join('');
    }
    return word;
  }).join(' ');
}

//=======================================================================================================

// 8 kyu
// Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);
// makes the character at index 0 capitalized then adds a copy of the string from the first index on


//=======================================================================================================

// 8 kyu
// Grader

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	'F'
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0.9) == 'A'
// grader(0.3) == 'F'
// grader(234) == 'F'
// grader(0.75) == 'C'

function grader(score) {
  if(score >= 0.9 && score <= 1) {
    return 'A';
  }
  else if(score >= 0.8 && score < 0.9) {
    return 'B';
  }
  else if(score >= 0.7 && score < 0.8) {
    return 'C';
  }
  else if(score >= 0.6 && score < 0.7) {
    return 'D';
  }
  else {return 'F';}
}

//=======================================================================================================

// 8 kyu
// Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

const findDifference = (a, b) => Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]);

//=======================================================================================================

// 8 kyu
// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return yourPoints > classPoints.reduce((classAverage, grade) => classAverage + grade ) / classPoints.length;
}

//=======================================================================================================

// 8 kyu
// String repeat

// Write a function called repeatStr which repeats the given string string exactly n times.

const repeatStr = (n, s) => s.repeat(n);

//=======================================================================================================

// 8 kyu
// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

const maps = (x) => x.map((c, e) => c * 2)

//=======================================================================================================

// 8 kyu
// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

// stringClean('! !') == '! !'
// stringClean('123456789') == ''
// stringClean('This looks5 grea8t!') == 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

const stringClean = (s) => s.replace(/\d+/g, '');
// replaces any digit 0-9 globally with '',  essentially removing that index.


//=======================================================================================================

// 8 kyu
// The falling speed of petals

// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

const sakuraFall = (v) => v > 0 ? 400/v : 0;

//=======================================================================================================

// 8 kyu
// Returning Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

const greet = (name) => `Hello, ${name} how are you doing today?`;

//=======================================================================================================

// 8 kyu
// Simple Fun #352: Reagent Formula

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

const isValid = formula => {
  const firstRule = !(formula.includes(1) && formula.includes(2));
  const secondRule = !(formula.includes(3) && formula.includes(4));
  const thirdRule = formula.includes(5) === formula.includes(6);
  const fourthRule = formula.includes(7) || formula.includes(8);
  return firstRule && secondRule && thirdRule && fourthRule;
}

//=======================================================================================================


// 8 kyu
// Grasshopper - Debug

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

const weatherInfo = f => {
  const c = (f - 32) * (5/9);
  return c + ' is' + (c > 0 ? ' above': '') + ' freezing temperature';
}

//=======================================================================================================

// 8 kyu
// Do I get a bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python).


const bonusTime = (salary, bonus) => bonus === true ? "\u00A3" + salary * 10 : "\u00A3" + salary;

// If the employee receives a bonus you multiply by ten adding the pound sign, if not just add the pound sign

//=======================================================================================================

// 8 kyu
// Who is going to pay for the wall?

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return an array containing only the name as is"

const whoIsPaying = name => name.length <= 2 ? [name] : [name, name.substr(0, 2)];

//=======================================================================================================

// 8 kyu
// Kata Example Twist

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
for(var i = 0; i < 1000; i++){
  websites.push("codewars");
}

//=======================================================================================================

// 8 kyu
// Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b); //something went wrong
};

//=======================================================================================================

// 8 kyu
// Multiple of index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  return array.filter((e,i) => e % i === 0);
}
// if its a multiple the element divided by the index will return modulo 0.

//=======================================================================================================

// 8 kyu
// Check the exam

// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

function checkExam(array1, array2) {
  const score = array1.map((e,i) => array2[i] === "" ? 0 : e === array2[i] ? 4 : -1).reduce((a,b) => a+b,0);
  return score > 0 ? score : 0;
 };

// for the score, check to see if theres is a blank answer at any index in array2, if so return 0. else if the element from array1 is strictly equal the value at any index in array2, return 4, if not return -1. then reduce those values down, leaving an initial value of 0 for score.

// then return score if its greater than 0 or 0 if its is not.


//=======================================================================================================

// 8 kyu
// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!

const oddCount = (n) => Math.floor(n/2);

//=======================================================================================================

// 8 kyu
// Define a card suit

// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  let arr = card.split('').reverse();
  for(var i = 0; i < arr.length; i++) {
    if(arr[0] === '♣'){
      return 'clubs'
    }
    if(arr[0] === '♠'){
      return 'spades'
    }
    if(arr[0] === '♦'){
      return 'diamonds'
    }
    else {return 'hearts'}
  }
}

//=======================================================================================================

// 8 kyu
// Who ate the cookie?

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

function cookie(x){
  const who = typeof x === "string" ? "Zach" : typeof x === "number" ? "Monica" : "the dog";
  return `Who ate the last cookie? It was ${who}!`;
}

// String interpolation returning the string associated with the variable who

//=======================================================================================================

// 8 kyu
// MakeUpperCase

// Write function makeUpperCase.

const makeUpperCase = str => str.toUpperCase();

//=======================================================================================================

// 8 kyu
// Can we divide it?

// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0 ? true : false;

//=======================================================================================================

// 8 kyu
// Type of sum

// Return the type of the sum of the two arguments.

const typeOfSum = (a, b) => typeof(a + b);

//=======================================================================================================

// 8 kyu
// Find out whether the shape is a cube

// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

const cubeChecker = (volume, side) => volume > 0 ? volume === Math.pow(side, 3) : false;

//=======================================================================================================

// 8 kyu
// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = (number) => number % 2 === 0 ? "Even" : "Odd";

//=======================================================================================================


// 8 kyu
// USD => CNY

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be reounded to the nearest hundreth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

//=======================================================================================================

// 8 kyu
// Third Angle of a Triangle

// You are given two angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

const otherAngle = (a, b) => 180 - (a+b);

//=======================================================================================================

// 8 kyu
// Grasshopper - Summation

// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

var summation = (num) => num * (num + 1) / 2;

//=======================================================================================================

// 8 kyu
// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

const reverseWords = (str) => str.split(' ').reverse().join(' ');

//=======================================================================================================

