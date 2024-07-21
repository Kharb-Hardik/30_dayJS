// Task 1: Check if a number is positive, negative, or zero
let n = 5; 
let nt;
if (n > 0) {
    nt = "positive";
} else if (n < 0) {
    nt = "negative";
} else {
    nt = "zero";
}
console.log(nt);//positive

// Task 2: Check if a person is eligible to vote
let age = 20; 
let cv = age >= 18;
console.log(cv);//True

// Task 3: Find the largest of three numbers
let num1 = 10; 
let num2 = 25; 
let num3 = 15; 
let ln = Math.max(num1, num2, num3);
console.log(ln);//25

// Task 4: Determine the day of the week
let dn = 3; 
let dna;
switch (dn) {
    case 1: dna = "Monday"; break;
    case 2: dna = "Tuesday"; break;
    case 3: dna = "Wednesday"; break;
    case 4: dna = "Thursday"; break;
    case 5: dna = "Friday"; break;
    case 6: dna = "Saturday"; break;
    case 7: dna = "Sunday"; break;
    default: dna = "wrong num";
}
console.log(dna); //wednesday

// Task 5: Assign a grade based on a score
let s = 85; 
let g;
if (s >= 90) {
    g = 'A';
} else if (s >= 80) {
    g = 'B';
} else if (s >= 70) {
    g = 'C';
} else if (s >= 60) {
    g = 'D';
} else {
    g = 'F';
}
console.log(g); //B

// Task 6: Check if a number is even or odd
let ntc = 7; 
let eoo;
if (ntc % 2 === 0) {
    eoo = "even";
} else {
    eoo = "odd";
}
console.log(eoo);//odd

// Task 7: Check if a year is a leap year
let year = 2024; 
let ily = false;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            ily = true;
        }
    } else {
        ily = true;
    }
}
console.log(ily);//true