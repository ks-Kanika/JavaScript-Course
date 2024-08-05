 //String as a object

let myName= 'kanika'
let age=  21
//console.log(str  +  age+ "Lives in Rishikesh")
//console.log(`hello my name is ${myName} and I am  ${age} years old`)
console.log(`hello my name is ${myName.toUpperCase()} and I am  ${age} years old`)
 //String as a object
 const newGame= new String ('Kirmada-kr-ma')
 //console.log(newGame);
 // Acess key value
 console.log(newGame[0]) // output k
 console.log(newGame.__proto__) // output object  , shown in inspect console
 //console.log(newGame.length) 
 //console.log(newGame.charAt(2)); 
 //console.log(newGame.indexOf('g')); // position 
 const newString=newGame.substring(0,5)
 console.log(newString)
 const anotherString=newGame.slice(-5,1)
 console.log(anotherString)
 //console.log(newGame.substring(0,3)); // last value doesnot include
 //console.log(newGame.slice(0,3)); // use negative code also
 const myHobby="listen      to play  music"
//  console.log(myHobby);
//  console.log(myHobby.trim()); // used to remove spaces
// console.log(myHobby.trim());
const url= "https://kanika.com/kanika%20sharma"
console.log(url.replace('%20' , '-')); // replace 
console.log(url.includes('kaika')); // check whether the value is included or not
console.log(newGame.split('-'));  //uses to output as a array bases on 
