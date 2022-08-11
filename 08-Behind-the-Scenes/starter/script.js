"use strict";

/**
 * High level: Do not have to manage resources (memory, garbage collection, etc)
 *
 * Interpreted/just-in-time compiled language
 *
 * Multi-paradigm: procedural, OOP, functional-programming (imperative vs. declarative)
 *
 * Prototype-based object-oriented: Almost everything is an object inherited from a prototype, except for primatives
 *
 * First-class functions: Functions are treated as variables. We can pass them into other functions, and return them from functions
 *  - Like a pseudo-function pointer
 *
 * Dynamic: no data types are explicitly assigned to variables. "let x = 23", "let y = 'string' "
 *
 * Single-threaded: JS is ran in a single thread, multi-threading not possible
 *
 * Non-blocking event loop: takes long running tasks (fetching data, etc), executed them in the background and returns them to the
 * main thread once they are finished.
 *
 * Most popular JS engine: V8, owned by Google and powers Node.js
 *
 * Compilation vs. interpretation:
 *  - compilation: Source code is converted to machine code and written to a binary file
 *  - interpretation: Interpreter runs through the source code and executes it line by line
 *
 * Just in time compilation: Entire code is converted to machine code at once, then executed immediately
 */

/*
//scope example
const name = "Jake"; //global

const first = () => {
  let a = 1; //local
  const b = second(7, 9); //local
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2; //local
  return c;
}

const x = first(); //global
*/

//regular functions vs arrow functions
const jake = {
  firstName: "Jake",
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1
    // const self = this;
    // const isMillenial = function() {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //!NEVER USE AN ARROW FUNCTION AS A METHOD
  greetDNU: () => {
    console.log(this); //this = window, not jake object
    console.log(`Hey ${this.firstName}`);
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
// jake.greetDNU();
jake.greet();
jake.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

//arrow functions DO NOT get arguments keyword
var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 6);
