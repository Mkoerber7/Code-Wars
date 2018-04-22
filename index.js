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


