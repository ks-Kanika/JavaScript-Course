const myscore=50;
console.log(myscore);
const balance = new  Number(100); // both are numbers but a new object is a special known nimber.
// console.log(balance);

//console.log(balance.toString()); // numbers into syring
//console.log(typeof balance); //object 
// console.log(typeof myscore) //number
console.log( balance.toFixed(2)); //object 

const otherNum=100.254641;
// console.log(typeof otherNum)
console.log(otherNum.toPrecision(3)); // must know

const hunderd=1000000000;
console.log(hunderd.toLocaleString('en-IN'));



// +++++++++++++++++++++++++++++++         MATHS
// console.log(Math);
// console.log(Math.abs); //absolute value changes -ve value to +
// console.log(Math.round); //roundoff
// console.log(Math.ceil(4.6)); //top roundoff
// console.log(Math.floor(4.1)); //botton roundoff
// console.log(Math.min(1,5,9,6)); // min value

console.log(Math.random()); // value between 0 to 1