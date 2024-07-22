// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
//55

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
function factorial(n) {
    let result = 1;
    let j = n;
    do {
        result *= j;
        j--;
    } while (j > 0);
    return result;
}
let number = 5; 
console.log(number);
//120

// Task 7: Write a program to print a pattern using nested for loops
let rows = 5;
for (let k = 0; k < rows; k++) {
    let pattern = '';
    for (let l = 0; l <= k; l++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// Task 8: Print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}

// Task 9: Print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i > 7) {
        break; 
    }
    console.log(i);
}
