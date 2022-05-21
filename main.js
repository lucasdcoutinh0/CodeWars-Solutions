// Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}
// Convert a String to a Number!
const stringToNumber = function(str){
  return parseInt(str);
}
// What is between?
function between(a, b) {
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}
// Friend or Foe?
function friend(friends){
  return friends.filter((item) => item.length === 4)
}
// Two to One
function longest(s1, s2) {
  let res2 = s1.concat(s2);
  const remDup= s=> s.split("").sort().reduce((a,b)=>(a[a.length-1]!=b)?(a+b):a,"")
  return remDup(res2)
}
// Return Negative
function makeNegative(num) {
  return num > 0 ?-num : num
}
// Convert boolean values to strings 'Yes' or 'No'
function boolToWord( bool ){
  return bool === true ? 'Yes' : 'No'
}
// Vowel Count
function getCount(str) {
  const arr = str.split('')
  const newArr = []
  const vowel = arr.map((item) => {
    if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === "u"){
      newArr.push(item)
    }
  })
  return newArr.length
}
// Sum of positive
function positiveSum(arr) {
 const initialValue = 0
 const sum = arr.map((item) => item > 0 ? item : null).reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
  return sum
}
//Highest and Lowest
function highAndLow(numbers){
 const splited = numbers.split(' ');
 var max = splited.map(Number).reduce(function(a, b) {
  return Math.max(a, b).toString();
});
  var min = splited.map(Number).reduce(function(a, b) {
  return Math.min(a, b).toString();
});
  var result = max+" "+min
  return result
}
// Regex validate PIN code
function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
