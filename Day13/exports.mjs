export function add(a, b) {
    return a + b;
}

export const person = {
    name: "cant",
    age: 18,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };


  export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }



export default function greet(name) {
    return `Hello, ${name}!`;
}  


export const pi = 34.5;
export const gr = 89.3;

export function square(x) { return x * x; }
export function cube(x) { return x * x * x; }