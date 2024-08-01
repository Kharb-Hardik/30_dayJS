// Task 1: Promise that resolves after 2 seconds
const rp = new Promise((resolve,reject) => {
    setTimeout(() => resolve("Promise resolved"), 2000);
});
rp.then("hello");

// Task 2: Promise that rejects after 2 seconds
const rep = new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error("Promise rejected")), 2000);
});
rep.catch(console.error);

// Task 3: Simulating data fetching with chained promises
function fetchData(data) {
    return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

fetchData("1")
    .then(result => {
        console.log(result);
        return fetchData("2");
    })
    .then(result => {
        console.log(result);
        return fetchData("3");
    })
    .then(console.log);

// Task 4: Async function waiting for a promise
async function resolveAsyncFunction() {
    const result = await new Promise(resolve => setTimeout(() => resolve("Async resolved"), 1000));
    console.log(result);
}

resolveAsyncFunction();
async function rejectAsyncFunction() {
    try {
        await new Promise((resolve, reject) => setTimeout(() => reject(new Error("Async rejected")), 1000));
    } catch (error) {
        console.error(error.message);
    }
}

rejectAsyncFunction();

// Task 6: Fetch API with promises
fetch('https://tiredaf.com')
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);

// Task 7: Fetch API with async/await
async function fetchDataAsync() {
    try {
        const response = await fetch('https://tiredaf.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();

// Task 8: Promise.all
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

Promise.all(promises).then(console.log);

// Task 9: Promise.race
const racePromises = [
    new Promise(resolve => setTimeout(() => resolve("First"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 500)),
    new Promise(resolve => setTimeout(() => resolve("Third"), 1500))
];
Promise.race(racePromises).then(console.log);

