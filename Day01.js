//1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 10
console.log(num) //10

//2: Declare a variable using let, assign it a number, and log the value to the console.
let n = 4;
console.log(n) //4

//3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boole = true
console.log(boole) //true

//5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let a = "hello"
console.log(a) //hello
a = "hi"
console.log(a) //hi

//4: Create variables of different data types and log each variable's type using the typeof operator.
console.log(typeof(boole)) //boolean
console.log(typeof(n)) //number
console.log(typeof(a)) //string
console.log(typeof([1,2,3,4])) //object
console.log(typeof({})) //object

//6: Try reassigning a variable declared with const and observe the error.
const m = 10
// m=5;//Error is thrown as const cannot be reassigned

// Feature Request 
//1: Variable Types Console Log
let nt = 46;
let st = "gg";
let bt = false;
let ot = { bee: "honey" };
let at = [1, 2, 3, 4, 5];
let un;
let nut = null;
console.log(typeof nt); //number
console.log(typeof st); //string
console.log(typeof bt); //bool
console.log(typeof ot); //obj
console.log(typeof at); //obj
console.log(typeof un); //undefined
console.log(typeof nut); //obj

// Feature Request
// 2: Reassignment Demo
let l = "let is flexi";
console.log(l); //logged value
l = "let flexed";
console.log(l); //value changed
const c = "const is not flexi"; //logs value
console.log(c);
//c = "const got stuck" //Error is thrown as const cannot be reassigned