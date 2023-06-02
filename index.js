console.log("hello world") 
  let arr = [74, 12, 48]; 
let a = arr.map((value, index, array) => { 
  console.log(value, index, array); 
  // perform some operation on array 
  return value + 1; }) 
  
console.log("array - ", a);