// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr);
// Output: [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]); // Output: 1
console.log(arr[arr.length - 1]); // Output: 5

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(0);
console.log(arr); // Output: [0, 2, 3, 4, 5]

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const n = arr.map((i) => i * 2);
console.log(n); // Output: [0, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const eve = arr.filter((i) => i % 2 === 0);
console.log(eve); // Output: [0, 2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const yah = arr.reduce((result, i) => result + i, 0);
console.log(yah); // Output: 14 (0 + 2 + 3 + 4 + 5)


// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output:0 2 3 4 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((i) => {
  console.log(i);
});
// Output:0 2 3 4 5

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const kat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(kat);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(kat[1][2]); // Output: 6

// Feature Requests
// 1. Array Manipulation Script
function arrman() {
  let arr = [1, 2, 3];
  arr.push(4); // Add to end: [1, 2, 3, 4]
  arr.pop(); // Remove from end: [1, 2, 3]
  arr.unshift(0); // Add to beginning: [0, 1, 2, 3]
  arr.shift(); // Remove from beginning: [1, 2, 3]
  return arr;
}
console.log(arrman()); // Output: [1, 2, 3]

// 2. Array Transformation Script
function arrtran() {
  let num = [1, 2, 3, 4, 5];
  let d = num.map((n) => n * 2);
  let e = num.filter((n) => n % 2 === 0);
  let s = num.reduce((acc, curr) => acc + curr, 0);
  return { d, e, s };
}
console.log(arrtran());
// Output: { d: [2, 4, 6, 8, 10], e: [2, 4], s: 15 }

// 3. Array Iteration Script
function arrit() {
  let r = ["a", "b", "c"];
  r.forEach((f) => console.log(f));
  for (let f of r) {
    console.log(f);
  }
}
arrit();
// Output:a b c a b c

// 4. Two-dimensional Array Script
function tdarr() {
  let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let element = m[1][1]; 
  m[0][2] = 10; 
  return m;
}
console.log(tdarr());
// Output: [[1, 2, 10], [4, 5, 6], [7, 8, 9]]