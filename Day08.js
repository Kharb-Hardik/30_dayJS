// Task 1: Template Literals
const tp = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}
tp("Hardik", 19);
// Hello Hardik, you are 19 years old


// Task 2: Multi-line string using template literals
let mls = `This is
    a multi-line string. Haha!`;
console.log(mls);
// This is
//     a multi-line string. Haha!


// Task 3: Array destructuring
const ades = (arr) => {
    let [a, b, ...rest] = arr;
    console.log(a + b);
}
ades([4, 3, 1]);
// 7

// Task 4: Object destructuring
const odes = (obj) => {
    const {name, greet} = obj;
    console.log(name, greet);
}
odes({name: "Hardik", greet: "sup", stat: "tired"});
// Hardik sup

// Task 5: Spread operator
let oa = [10, 5, 3, 7];
let na = [...oa, 4];
console.log(na);
// [10, 5, 3, 7, 4]

// Task 6: Rest operator
const s = (...rest) => {
    let sum = rest.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}
s(10, 5, 3, 7);
// 25

// Task 7: Default parameters
const m = (a, b = 1) => {
    return a * b;
}
console.log(m(10, 2));
console.log(m(10));
// 20
// 10

// Task 8 & 9: Enhanced object literals
const key1="bruh";
const wr = {
    year: 2024,
    status: "no rains",
    effect: "my soul burning away",
    [key1]: "man these errors",
    hell() {
        console.log(`${this.year} was a year with ${this.status}, resulting in ${this.effect}`);
    }
}
wr.hell();
// 2024 was a year with no rains, resulting in my soul burning away

console.log(wr);
// {
//   year: 2024,
//   status: 'no rains',
//   effect: 'my soul burning away',
//   bruh: 'man these errors',
//   hell: [Function: hell]
// }