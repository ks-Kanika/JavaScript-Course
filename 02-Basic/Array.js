let myarr=['kanika' ,'vanshu', 'ansh']
console.log(myarr); //pbject
console.log( typeof myarr);

//second way
//const newArr= new Array(1,2,'kanika')
//console.log(newArr);
//console.log( newArr[1]); //object
//Array Methods
myarr.push('kartik'); // adding one element at lasr
//console.log(myarr)
myarr.pop // removing last element
myarr.unshift('mylove') // at first
myarr.shift() // at first remove
// console.log(myarr)
myarr.includes // boolean data type
myarr.indexOf
const newArray= myarr.join() // array into string
//console.log(newArray);
 //slice and splice
 console.log("A" , myarr);
 const sliceArr= myarr.slice(1,3) //must know 
 //console.log((sliceArr));



 let State1= ['Bihar', 'UK', "MP"];
 let States2=['UP', "Delhi", "AP"];
 //State1.push(State2);
// console.log(State1) // it takes second aray as a element.
 // console.log(Country[3][2]) // it takes second aray as a element.


 // to add 
 let AllStates=State1.concat(States2)
//  console.log(AllStates);

 // spread operator
 let  newState=[...State1, ...States2]
//  console.log(newState);
// console.log (Array.isArray("Kanika")); // to check an array
// console.log (Array.from("Kanika")); //create arry
// console.log (Array.from({name:"kanika"})); //intersting as key value aary/
let scr1=100
let scr2=200
let scr3=900
console.log(Array.of(scr1, scr2, scr3)); // using of insteas of from 
