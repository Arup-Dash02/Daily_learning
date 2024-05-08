// const x: number = 10;
// console.log(x);
//Basic types in TS:number,string,boolean,null,undefined

//Problem-1
//How to give types to argument of a function

// function greet(fname: string, lname: string, age: number) {
//   console.log(`hello ${fname} ${lname} and you are ${age} years old.`);
// }

// greet("Arup", "Dash", 22);

//Problem-2
//function to calculate sum of two numbers
// function sum(num1: number, num2: number) {
//   return num1 + num2;
// }

//we can explicitly give type to a function what it should return like below
// function sum(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(sum(56, 98));

//Problem-3
//Create a function to verify is the person is 18+
// function isLegal(age: number) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// if (isLegal(30)) {
//   console.log("Person is adult");
// } else {
//   console.log("Person is child");
// }

//Problem-4
// Create a function that takes another function as input and runs it after 1 sec
// function greet() {
//   console.log("Hello!");
// }

// function runAfter1sec(fn: Function) {
//   setTimeout(() => {
//     fn();
//   }, 1000);
// }

//we can define the function type more efficiently by following(IMPORTANT)
// function runAfter1sec(fn: () => void) {
//   setTimeout(() => {
//     fn();
//   }, 1000);
// }

// runAfter1sec(greet);

// Learn about The tsconfig file

// ctrl+f for search in the current File
// ctrl+shift+f for search as whole

//-------------------------------------INTERFACES-------------------------------
// we can assign type to an object using interfaces
//Assignment-1
// interface User1 {
//   fName: string;
//   lName: string;
//   email?: string;
//   age: number;
// }

// type User2 = {
//   fName: string;
//   lName: string;
//   email?: string;
//   age: number;
// };
// //Optional argument:User may or maynot provide this argumentand it is specified by "?:".Here email is the optional argument.

// function isLegal(user: User1) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function greet(user: User1) {
//   console.log(`Hello ${user.fName}.`);
// }

//-------------------------------------Unions---------------------------
//In this function argument the id should be either number or string.Lets see how we can do this
//syntax-1
// function greet(id: number | string) {}
//syntax-2
// type numberOrString = number | string;
// //here we are defining new type
// function greet(id: numberOrString) {}

//---------------------------------------intersection-------------------
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type Manager = {
//   name: string;
//   department: string;
// };

// //we can specify a new type named teamlead which has common properties of those two types
// // type TeamLead = {
// //   name: string;
// //   startDate: Date;
// //   department: string;
// // };
// //But we can do the same above thing so easily using intersection in type like following
// type TeamLead = Employee & Manager;

// const t: TeamLead = {
//   name: "Arup Dash",
//   startDate: new Date(),
//   department: "SWE",
// };

//-------------------------------Arrays in TS---------------------------------
// we can access arrays in TS,by simply just adding a [] annotation next to the type
//Ex-1(Given array of integers,return maximum value in the array)
// function findMax(arr: number[]) {
//   let maxi = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxi) {
//       maxi = arr[i];
//     }
//   }
//   return maxi;
// }

//OR we can do
// type NumberArr = number[];//This can be done only using type not using Interface
// function findMax(arr: NumberArr) {
//   let maxi = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxi) {
//       maxi = arr[i];
//     }
//   }
//   return maxi;
// }

// console.log(findMax([1, 2, 3, 4, 5]));

//Assignment(Given a list of user,filter out the users that are legal)
interface User {
  fName: string;
  lName: string;
  age: number;
}

// type userArray = User[];
function filterUsers(users: User[]) {
  return users.filter((user) => {
    return user.age >= 18;
  });
}

// function filterUsers(users: User[]) {
//   return users.filter((x) => x.age >= 18);
// }

console.log(
  filterUsers([
    {
      fName: "Arup",
      lName: "Dash",
      age: 23,
    },
    {
      fName: "Abinash",
      lName: "Dash",
      age: 30,
    },
    {
      fName: "Akshit",
      lName: "Dash",
      age: 1,
    },
  ])
);
