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
