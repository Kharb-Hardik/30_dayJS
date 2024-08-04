class Person {
    constructor(fname,lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.fname} and I'm ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(this.age);
    }

    static gg() {
        return "Hello, I'm a person!";
    }
    
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }

    set firstName(name) {
        this.fname = name;
    }
    set lastName(name) {
        this.lname = name;
    }
}

// Task 1: Create an instance of Person and log the greeting
const p1 = new Person("hk","bruh", 20);
console.log(p1.greet());

// Task 2: Update age and log
p1.updateAge(19);



class Student extends Person {
    static total = 0; 

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.total++;  
    } 
    gsid() {
        return this.studentId;
    }
    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

// Task 3: Create a Student instance and log the student ID
const s1 = new Student("hk", 20, "123102157");
console.log(s1.gsid());

// Task 4: Log the overridden greeting message
console.log(s1.greet());

// Task 5: Call the static method on Person
console.log(Person.gg());

// Task 6: Log the total number of students
console.log(`Total number of students: ${Student.total}`);

// Task 7 & 8: Demonstrate getter and setter usage
const p2 = new Person("hk","bruh",25);
console.log(p2.fullName);
p2.firstName = "jood";
p2.lastName = "op";
console.log(p2.fullName);

class Account {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Task 9&10: Test Account class methods
const acc = new Account();
acc.deposit(1000);
acc.withdraw(500);
console.log(acc.getBalance());
