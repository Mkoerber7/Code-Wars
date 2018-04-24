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