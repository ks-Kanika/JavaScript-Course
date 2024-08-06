// object create thorungh contructor
// 1st methd
//const tinderUser= new Object()    // Empty object
const tinderUser= {}   // Empty object , the differnce betwwen ypper method and this is that upper one is singleton object .
tinderUser.id="123ab"
tinderUser.name="kanika"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
 
const regularUser={
    email:"someone@gmail.com",
    fullName :{                  // full name is a object inside regular user . irt is cslled nested object
        userfullname:{
            firstname:"kanika",
            lastname:"sharma"
        }
    }
 }
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.lastname)
// console.log(regularUser.fullName?.userfullname.lastname)

const obj1={
    1:'a', 2:'b'
}

const obj2={
    3:'c', 4:'e'
}
// const obj3= Object.assign( {}, obj1, obj2)  //{} target source not neccessary but recommended
 //console.log(obj3);       //object assign mdn


 //using spread operator
 const obj3={...obj1 , ...obj2}
//  console.log(obj3);
const users=[
    {
        id:'1',
        email:'kanika@gmail.com',
        
    },
    {
        id:'2',
        email:'kanika@gmail.com',

    },
    {
        id:'3',
        email:'kanika@gmail.com',

    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //data type array
console.log(Object.entries(tinderUser)); //data type array
console.log(Object.values(tinderUser)); //data type array

//when values does not exist it may be crash , check it
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLoggedI"));

// Destructure Objects
const course={
    courseName: "JS-Course", 
    coursePrice: 999,
    courseTeacher:'KK ',
}
// access value
course.coursePrice
course.courseName
// console.log(courseName); not acceptable refernce error
console.log(course.coursePrice , course.courseName)

// clean code ,  syntactical 
const{courseName}=course   // suppose the value is leghtn it can destrcutre like below
const{courseTeacher: Teacher}=course // destrucute 
console.log(courseName);
console.log(Teacher);