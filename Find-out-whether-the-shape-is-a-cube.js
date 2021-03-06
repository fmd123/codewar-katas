//8kyu
//getting server error 500 when I try to submit to codewars. add this later.

//Find out whether the shape is a cube
// To find the volume (centimeters cubed) of a cuboid you use the formula:
//
// volume = Length * Width * Height
//
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
//
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
//
// Return true if the cuboid could have equal sides, return false otherwise.
//
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
//
// Note: the sides must be integers

var cubeChecker = function(volume, side){
if(Math.sign(volume) !== 1 || Number.isInteger(side) === false) {
  return false;
}
if (volume/side === side * side){
  return true;
}
  return false;
};
