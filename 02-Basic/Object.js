// Singleton :-> object cannot be declared as literals . it will constructor called singletons.

// Object Literals
Object.create     // method  of object through constructor method
 let  myObj={}; //Empty Object
 const myObje={ 
    name: 'Kanika', // keys aee taken as string // value may be or not
    age:21, 
    MobileNo: 787986223,
    EMail: 'kanika@gmail.com',
    isLoggedIn:false, 
    lastLoginDays: ['mon',  'sat']
 }; 
  //console.log(myObje.lastLoginDays); //method to access object but not reccomened 
 //console.log(myObje['lastLoginDays']); //method to access object reccomened , '' necessary bcoz key are always treated as string 
 //console.log(myObje["EMail"]); //method to access object reccomened , '' necessary bcoz key are always treated as string 


 // using symbol data types in object
let mySymbol=Symbol('kanika.product')
 let myObject={ 
    name: 'Kanika', // keys aee taken as string // value may be or not
    age:21, 
    MobileNo: 787986223,
    EMail: 'kanika@gmail.com',
    isLoggedIn:false, 
    lastLoginDays: ['mon',  'sat']
    [mySymbol]="mykey1",

 };
 //changes value
 // myObje='kanika2504@gmail.com'
 //console.log(myObject);
 // console.log(myObject[mySymbol]);
 //Object.freeze(myObject) // freexe value does not change it

 //
 myObject.greeting= function(){
    console.log("hi my dear obj");
 }
 console.log(myObject.greeting);
 console.log(myObject.greeting());
 
 myObject.greetingTwo= function(){
    console.log(`hi my Friend, ${this.name}`);
    console.log(`this is your  email ${this.EMail}`);
 }
 console.log(myObject.greeting);
 console.log(myObject.greetingTwo());