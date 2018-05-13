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