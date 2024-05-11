// Here we are going to read about enum(Enumeration)
// let we have to define a function to represent direction key pressed
// function doSomething(KeyPressed: string) {} //wrong
//but the problem is we can't define the argument as string else it will accept any string provided by user rather han only directions

//to solev the above problem we can use type in TS and define all the inputs expected
// type KeyInput = "Up" | "Down" | "Left" | "Right";
// function doSomething(KeyPressed: KeyInput) {}

//But we can do the same more clearly using enum
// enum Direction {
//   Left,
//   Right,
//   Up,
//   Down,
// }
//In this way we can define an enum
//And if we want to give it a value(string),we can do as below
// enum Direction {
//   Left = "left",
//   Right = "right",
//   Up = "up",
//   Down = "down",
// }
// enum Direction {
//   Left = 1,
//   Right,
//   Up,
//   Down,
// } //In this enum the value start from 1 rather than 0 by default
// //we can also give individual values

// //If we are giving value to any enum then we have to give all the enums a value,else it will show error

// function doSomething(KeyPressed: Direction) {
//   //we can use it as Direction.Down
//   if (KeyPressed == Direction.Down) {
//   }
// }

// doSomething(Direction.Down);
// doSomething(Direction.Up);

//-------------Best Example----------------
// const app = express();

// enum ResponseStatus {
//   Success = 200,
//   NotFound = 404,
//   Error = 500,
// }

// app.get("/", (req, res) => {
//   if (!req.query.userId) {
//     res.status(ResponseStatus.NotFound).json({});
//   }

//   res.json({});
// });

// app.get("/123", (req, res) => {
//   if (!req.query.userId) {
//     res.status(ResponseStatus.NotFound).json({});
//   }

//   res.json({});
// });

//Here the benifit of using enum is =>Great user readability
//                                  =>If we have two routes and both use 1 status code if we have to change it to another,then we can simply change the status number in enum then it automaticallyuseful for both the routes

//-----------------------------------------------------------------------------------------
//---------------------------------GENERICS------------------------------------
// lets we have a function which takes number or string as input and we have to return the first element of the array
// function firstEl(arr: (number | string)[]) {
//   return arr[0];
// }

//we can do the above thing in a clear manner
// type Input = number | string;

// function firstEl(arr: Input[]) {
//   return arr[0];
// }

// const value = firstEl(["Arup", "Dash", 1]);
// console.log(value.toUpperCase());
//But the problem here is as we define the type as string or number.The problem is we can not use toUpperCase() with number
//here how typeScript know that we are passing array of number or string

//Another problem here is the user can give a array containing mixed values of string and number;But we want either a number array or a string array
// we can solve this problem by following method
// function firstEl(arr: number[] | string[]) {
//   return arr[0];
// }

//But the best solution to solve both the problems is by using Generics

//For understanding generics lets take an example
// function identity<T>(arg: T) {
//   return arg;
// }

// let output1 = identity<string>("Arup");
// let output2 = identity<number>(1);

// output1.toUpperCase();

//Coming to original problem
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

// const el = getFirstElement(["Arup", "Dash", 1, 2]);
//If do not want to give mixed values then the above can be defined as following
const el = getFirstElement<string>(["Arup", "Dash"]);

const el1 = getFirstElement([1, 2, 3]);

console.log(el.toUpperCase());
