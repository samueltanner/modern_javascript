var moment = require('moment');
var mathjs = require('mathjs');

console.log("Hello from JS");

var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(datetime);

console.log(mathjs.sqrt(22));

let x = 5;

console.log(x);

let addTwoNumbers = (x, y) => { 
  return x + y;              
};                               
console.log(addTwoNumbers(1, 10));
