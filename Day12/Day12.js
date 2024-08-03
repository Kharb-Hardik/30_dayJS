// Custom Error class
class ce extends Error {
    constructor(message) {
        super(message);
        this.name = "newError";
    }
}
// Task 1: Function that intentionally throws an error
function tie() {
    try {
        throw new Error("error");
    } catch (error) {
        console.log(error.message);
    }
}

// Task 2: Function that divides two numbers
function dn(a, b) {
    try {
        if (b === 0) {
            throw new Error("Div by zero");
        }
        return a / b;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

// Task 3: Script with try-catch-finally
function tcf() {
    try {
        throw new Error("error");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("finally");
    }
}

// Task 4: Throw and catch a custom error
function tce() {
    try {
        throw new ce("custom error");
    } catch (error) {
        if (error instanceof ce) {
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
}

// Task 5: Validate user input
function vi(input) {
    try {
        if (!input || input.trim() === "") {
            throw new ce("Input cannot be empty");
        }
        console.log(input);
    } catch (error) {
        if (error instanceof ce) {
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
}

// Task 6 & 7: Promise that randomly resolves or rejects
function rip() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Promise resolved");
        } else {
            reject(new Error("Promise rejected"));
        }
    });
}

function hpc() {
    rip()
        .then(result => console.log(result))
        .catch(error => console.log(error.message));
}

async function hptc() {
    try {
        const result = await rip();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

// Task 8: Fetch with .catch()
function fiu() {
    fetch('https://rickrolled.com')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.message));
}

// Task 9: Fetch within async function using try-catch
async function fiua() {
    try {
        const response = await fetch('https://rickrolled.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

tie();
dn(10, 0);
tcf();
tce();
vi("");
hpc();
hptc();
fiu();
fiua();