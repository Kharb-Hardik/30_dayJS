// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function eve(i) {
    return i % 2 === 0 ? console.log("even") : console.log("odd");
}

// Task 2: Write a function to calculate the square of a number and return the result.
function sq(i) {
    console.log(i * i);
    return i * i; 
}

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxi = function(a, b) {
    a > b ? console.log(a) : console.log(b);
};

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenate = function(a, b) {
    console.log(a + b);
    return a + b; cc
};

eve(4);
sq(5);
maxi(10, 2);
cc("banao", "tori");

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a = 4, b = 5) => {
    console.log(a + b);
    return a + b;
};

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const inc = (s = "coffee", a = 'w') => {
    console.log(s.includes(a));
    return s.includes(a); 
};

sum(2, 3);
inc("pepe_W", "w");

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const prod = (a, b = 1) => {
    console.log(a * b);
    return a * b; 
};

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const msg = (n = "jhonny", age = 18) => {
    const message = `Nobody, nobody does it better ${n} ${age}`;
    console.log(message);
    return message; 
};

prod(0);
msg();

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const timepass = (a) => {
    console.log(a + 1);
    return a + 1;
};

const fnc = (func, n) => {
    for (let i = 0; i < n; i++) {
        func(i);
    }
};

fnc(timepass, 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const ts = (a) => {
    console.log(a * 2);
    return a * 2;
};

const i_hate_TLES = (fnc1, fnc2, b) => {
    console.log(fnc2(fnc1(b)));
    return fnc2(fnc1(b)); 
};

i_hate_TLES(timepass, ts, 3);