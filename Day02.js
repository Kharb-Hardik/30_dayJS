// Activity 1: Arithmetic Operations
const cal = (a = 99, b = 2) => {
    console.log(a + b);  // Task 1: Addition // Output: 16
    console.log(a - b);  // Task 2: Subtraction // Output: 4
    console.log(a * b);  // Task 3: Multiplication // Output: 60
    if (b != 0) {
        console.log(a / b);  // Task 4: Division // Output: 1.6666666666666667
        console.log(a % b);  // Task 5: Remainder // Output: 4
    }
}
cal(10, 6);

// Activity 2: Assignment Operators
let a = 10;
function ca(b) {
    console.log(a += b)  // Task 6: Use += operator // Output: 15
    console.log(a = a - b)  // Task 7: Use -= operator // Output: 10
}
ca(5)

// Activity 3: Comparison Operators
function cb(a, b) {
    console.log(a > b);   // Task 8: Compare using > // Output: true
    console.log(a < b);   // Task 8: Compare using < // Output: false
    console.log(a >= b);  // Task 9: Compare using >= // Output: true
    console.log(a <= b);  // Task 9: Compare using <= // Output: false
    console.log(a === b); // Task 10: Compare using === // Output: false
    console.log(a !== b); // Task 10: Compare using !== // Output: true
}
cb(5, 3);

// Activity 4: Logical Operators
function cc(a, b, c, d) {
    console.log(a > b && c < d); // Task 11: Use && // Output: false
    console.log(a > b || c < d); // Task 12: Use || // Output: false
    console.log(!c < d);         // Task 13: Use ! // Output: true
}
cc(3, 10, 7, 1)

// Activity 5: Ternary Operator
function sign(num) {
    // Task 14: Use ternary operator
    const result = num > 0 ? "positive" : "negative";
    console.log(result); // Output: negative
}
sign(-5)