// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "The subtle art of not giving a fk",
  author: "sm1",
  year: 2005
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getInfo = function() {
  return `${this.title} by ${this.author}`;
};
console.log(book.getInfo());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
  this.year = newYear;
};
book.updateYear(2027);
console.log(book);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const lib = {
  name: "Library",
  books: [
    { title: "1984", author: "kharb", year: 10 },
    { title: "48 Law of power", author: "forgot his name", year:-43 },
  ]
};
console.log(lib);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(lib.name);
lib.books.forEach(book => console.log(book.title));

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.gtay = function() {
  return `${this.title} (${this.year})`;
};
console.log(book.gtay());

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let prop in book) {
  if (typeof book[prop] !== 'function') {
    console.log(`${prop}: ${book[prop]}`);
  }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book).filter(value => typeof value !== 'function'));

// Feature Requests
// 1. Book Object Script
function createBook(title, author, year) {
  const book = {
    title,
    author,
    year,
    getInfo() {
      return `${this.title} by ${this.author} (${this.year})`;
    },
    updateYear(newYear) {
      this.year = newYear;
    }
  };
  console.log(book);
  console.log(book.getInfo());
  book.updateYear(2026);
  console.log(book);
  return book;
}
createBook("backstreetboys", "bsb", 2025);

// 2. Library Object Script
function clib(name, books) {
  const lib = {
    name,
    books,
    addBook(book) {
      this.books.push(book);
    },
    gat() {
      return this.books.map(book => book.title);
    }
  };
  console.log(lib);
  console.log(lib.gat());
  return lib;
}
clib("Library", [
  {title: "bruh", author: "by bruh", year: 2000},
  {title: "bruh reborn", author: "by bruh the second", year: 2020}
]);

// 3. Object Iteration Script
function itobj(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] !== 'function') {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== 'function') {
      console.log(`${key}: ${obj[key]}`);
    }
  });
  console.log(Object.values(obj).filter(value => typeof value !== 'function'));
}
itobj(book);