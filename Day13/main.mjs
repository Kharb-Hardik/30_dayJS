import { add, person, subtract, multiply } from './exports.mjs'
import greet from './exports.mjs'
import _ from 'lodash'
import axios from 'axios'
import * as ul from './exports.mjs';

// Using the imported add function (Task 1)
console.log(add(2, 3));

// Using the imported person object (Task 2)
person.greet();

// Using other imported math functions (Task 3)
console.log(subtract(1, 3));
console.log(multiply(1, 3));

// Using the default exported greet function (Task 4)
console.log(greet("hk"));

// Using the entire module import (Task 5)
console.log(ul.pi);          
console.log(ul.gr);      
console.log(ul.square(4));    
console.log(ul.cube(3));      

// Task 6: Using lodash (third-party module)
// Note: npm install lodash
const numbers = [1, 2, 3, 4, 5];
console.log(_.sum(numbers));

