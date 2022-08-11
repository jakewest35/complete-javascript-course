// let country = "United States"
// let continent = "North America"
// let population = 600000000

// console.log(country)
// console.log(continent)
// console.log(population)

/*
//coding challenge #1
const marksWeight = 78 //kg
const johnsWeight = 92 //kg
const marksHeight = 1.69 //m
const johnsHeight = 1.95 //m


const marksBMI = marksWeight / (marksHeight ** 2)
const johnsBMI = johnsWeight / (johnsHeight ** 2)

let markHigherBMI = marksBMI > johnsBMI
console.log(marksBMI)
console.log(johnsBMI)
console.log(markHigherBMI)
*/

/*
const firstname = "Jake"
const job = "student"
const birthYear = 1995
const year = 2022

//string concatenation
const jake = "I'm " + firstname + ", a " + (year-birthYear) + " years old " + job + "!";
console.log(jake);

//template literal
const jakeNew = `I'm ${firstname}, a ${year-birthYear} years old ${job}!`;
console.log(jakeNew)

console.log(`String with
mulitple
lines`);
*/

// const age = 17;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("You're old enough!");
// } else {
//   console.log(`You need to be ${18 - age} year(s) older :(`);
// }

/*
//coding challenge #2
const marksWeight = 78; //kg
const johnsWeight = 92; //kg
const marksHeight = 1.69; //m
const johnsHeight = 1.95; //m


const marksBMI = marksWeight / (marksHeight ** 2);
const johnsBMI = johnsWeight / (johnsHeight ** 2);
let markHigherBMI = marksBMI > johnsBMI;
if(markHigherBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's (${johnsBMI}) BMI is higher than Mark's (${marksBMI})!`);
}
*/

/*
//type conversion, explicit conversion
const inputYear = '1991';
console.log(inputYear + 18); //prints 199118
console.log(Number(inputYear) + 18);
console.log(Number('Jake'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion, implicit conversion
console.log("I am " + 23 + " years old."); //converts 23 to a string
console.log('23' - '10' - 3); //converts the strings to numbers since we are subtracting
console.log('23' + '10' + 3); //concatenates the strings
console.log('23' / '2')

let n = '1' + 1; //n = 11
n - n - 1; //n = 10
console.log(n); //prints 10
*/
/*
//falsy values
//0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jake"));
console.log(Boolean({}));
console.log(Boolean(""));
const money = 0;
if (money) {
  console.log("Put it in a Roth IRA like our lord and savior Dave Ramsey says");
} else {
  console.log("You should get a job ;)");
}

let height = undefined;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is UNDEFINED");
}
*/

/*
const age = 18;
if (age === 18)
  //use === to check if 2 values are EXACTLY the same. No type coersion is done
  console.log("You just became an adult, its all downhill from here(strict)");

  ! vvvvvv DO NOT USE THIS ONE vvvvv
if (age == '18')
  //==, performs type coersion to check if 2 values are equal
  console.log("You just became an adult, its all downhill from here(loose)");

const favorite = Number(prompt("What is your favorite number?"));
console.log(typeof favorite)
if(favorite === 27) {
  console.log("cool! 27 is a good number")
}
*/

/*
//coding challenge #3
const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
if(dolphinsScore > koalasScore && dolphinsScore >= 100) 
  console.log(`Dolphins win! 🏆 Their score was ${dolphinsScore}`);
else if(dolphinsScore < koalasScore && koalasScore >= 100) 
  console.log(`Koalas win! 🏆 Their score was ${koalasScore}`);
else if(dolphinsScore === koalasScore && koalasScore >= 100 && dolphinsScore >= 100)
  console.log("They both win the trophy! 🏆🏆");
else 
  console.log("No team won, everyone is a LOSER!");
*/

/*
//switch statement
const day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("It is Wednesday my dudes, AHHHHHHHHHHHHHHHHHHHHHHHHHH!!");
    break;
  case "Thursday":
  case "Friday":
    console.log("It's almost the weekend");
    break;
  case "Saturday":
  case "Sunday":
    console.log("ITS THE WEEKEND!!");
    break;
  default:
    console.log("That isn't a day of the week my guy.");
    break;
}
*/

/*
//conditional (ternary) operator
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); //ternary operator within a print statement
*/

/*
//coding challenge #4
const bill = 430;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`
);
*/
