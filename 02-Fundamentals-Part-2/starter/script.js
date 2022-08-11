"use strict"; //for debugging/troubleshooting

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive!");

const interface = 'Audio'; //interface is a JS keyword
const private = 1234; //private is a JS keyword
*/

/*
//functions
function logger() {
  console.log("My name is Jake");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juice = fruitProcessor(5, 0);
console.log(juice);
*/

/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1995);

//anonymous function
const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1995);
console.log(age1, age2);
*/

/*
//arrow functions
//    name       parameter       function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstname} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1995, "Jake"));
console.log(yearsUntilRetirement(1965, "Bob"));
*/

/*
//coding challenge #1
const checkWinner = function (avgKoalas, avgDolphins) {
  if(avgKoalas >= 2 * avgDolphins)
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  else if(avgDolphins >= 2* avgKoalas)
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  else
    console.log("Nobody won :(");
}
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgKoalas, avgDolphins);
*/

/*
//arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(friends.length); //prints # of items in array
console.log(friends[friends.length - 1]);

//arrays are mutable, like vectors in C++
friends.push("Jay"); //push_back
console.log(friends);

friends.unshift("John"); //push_front
console.log(friends);

//remove elements
friends.pop(); //removes last element
console.log(friends);
friends.shift(); //removes first element
console.log(friends);

console.log(friends.indexOf("Steven")); //returns index 'Steven' is located at, returns -1 if element does not exist

console.log(friends.includes("Steven")); // returns true if 'Steven' is found in the array, uses strict equality (no type coercion)
console.log(friends.includes("Bob"));

if(friends.includes("Peter")) {
  console.log("You have a friend named Peter");
}
*/

/*
//coding challenge #2
const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

//objects and object methods
// const jake = {
//   firstName: "Jake",
//   lastName: "West",
//   age: 2037 - 1995,
//   job: "Student",
//   friends: ["Michael", 'Peter', "Steven"]
// };

// console.log(jake.age);
// console.log(jake["age"]);

// const nameKey = 'Name';
// console.log(jake["first" + nameKey]);
// console.log(jake["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jake? Choose between firstName, lastName, age, job, or friends.");

// //adding properties to the object
// jake.location = "California";
// jake['twitter'] = "jakester3535";
// console.log(jake);

// if(jake[interestedIn]) {
//   if(interestedIn === "friends") {
//     console.log(`${jake.firstName} has ${jake.friends.length} friends, and his best friend is ${jake.friends[0]}`);
//   }
// }
// else
//   console.log("Wrong request. Choose between firstName, lastName, age, job, or friends.");

/*
const jake = {
  firstName: "Jake",
  lastName: "West",
  birthYear: 1995,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function() {
  // console.log(this);
  //   return 2037 - this.birthYear;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${
      this.hasDriversLicense
        ? "has a drivers license"
        : "doesn't have a drivers license"
    }`
  }
};

// console.log(jake.calcAge(jake.birthYear));
// console.log(jake["calcAge"](jake.birthYear));
// console.log(jake.calcAge());
// console.log(jake["calcAge"]());
console.log(jake.calcAge());
console.log(jake.age);

//challenge
// "Jake is a 42-year old student, and he has a drivers license."
console.log(jake.getSummary());
*/

/*
//coding challenge #3
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(
  `${
    mark.bmi > john.bmi
      ? `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s ${john.bmi}`
      : `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s ${mark.bmi}`
  }!`
);
*/
/*
const jake = [
  'Jake',
  'West',
  2037 - 1995,
  'student',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

//for loops
for(let i = 0; i < jake.length; i++) {
  // types[i] = typeof jake[i];
  types.push(typeof jake[i]);
}
console.log(types);


let dice = Math.trunc(Math.random() * 6) + 1; //generates a number 1-6

while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log("Loop is about to end");
}
*/

//Coding challenge #4
const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
}
console.log(tips);

for (let i = 0; i < bills.length; i++) {
  totals[i] = tips[i] + bills[i];
}
console.log(totals);

const calcAvg = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAvg(totals));