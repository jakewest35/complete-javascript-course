"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,

  orderDelivery ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//destructuring arrays
// const [x, y, z] = arr; //assigns x = arr[0], y = arr[1], z = arr[2]
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//old, inefficient way to switch variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//switching variables with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//access exact properties of an object, variable names MUST MATCH EXACTLY
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//same as above except renaming property variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//assigning default values in case no values exist in the object
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

//mutating a and b, MUST BE WRAPPED IN PARENTHESES
// ({ a, b } = obj);
// console.log(a, b);

//nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(o, c);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

//not all properties are specified, default values are used for those not specified
// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

//! 1) ***Destructuring***

//The spread operator, only use it in places where we write values separated by commas
//or to create shallow copies of arrays
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//prints 1, 2, 7, 8, 9
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

//copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//spread operator works on all iterables (strings, arrays, maps, sets)
// const str = "Jake";
// const letters = [...str, "", "W."];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} West`); //This does not work

// const ingredients = [
//   prompt(`"Let's make pasta! Ingredient 1? `),
//   prompt(`"Let's make pasta! Ingredient 2? `),
//   prompt(`"Let's make pasta! Ingredient 3? `),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Using the spread operator on objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);
// 
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name, restaurant.name);

//Rest pattern (opposite of the spread operator. Spread operator is used on the right side of the assignment operator(=))
//Rest pattern is used BEFORE the assignment operator and cannot skip indices
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
  // ...restaurant.mainMenu,
  // ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Rest pattern on objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//! 2) ***Functions***

// const add = function (...args) {
  //(...args) is called "rest arguments"
  // let sum = 0;
  // for (let i = 0; i < args.length; i++) sum += args[i];
  // console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// 
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("Mushrooms", "onion", "olives", "spinich");
// restaurant.orderPizza("Mushrooms");
// 
// Use ANY data type, return ANY data type, short-circuiting
// short-circuiting returns the first non-falsy value
// console.log("---- OR ----");
// console.log(3 || "Jake");
// console.log("" || "Jake");
// console.log(true || 0);
// // console.log(undefined || null);
// 
// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// 
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

//short-circuit can be used as a shorthand for a ternary operator
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---- AND ----");
// console.log(0 && "Jake");
// console.log(7 && "Jake");
// console.log("Hello" && 23 && null && "Jake");

//check if the orderPizza() function exists, if true order pizza
// if (restaurant.orderPizza) {
  // restaurant.orderPizza("Mushrooms", "Spinich");
// }

//shorthand of above if-statement
// restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinich");

//!Nullish coalescing operator(??)
//Nullish values: null and undefined(NOT 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//! Logical assignment operators
// const rest1 = {
  // name: "Capri",
  // numGuests: 20,
  // numGuests: 0,
// };
// 
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

//! OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//shorthand for above assignments
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//!nullish assignment operator (null/undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//!!AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

//! Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

//test data for coding challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. all players, separated by team
// const [players1, players2] = game.players;
// console.log("Item 1: ", players1, players2);

//2. keeper + rest of players
// const [gk, ...fieldPlayers] = players1;
// console.log("Item 2: ", gk, fieldPlayers);

//3. all players irrespective of team
// const allPlayers = [...players1, ...players2];
// console.log("Item 3: ", allPlayers);

//4. all players for both teams including substitutes
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

//5. team odds
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

//6. function that prints player goals (DO NOT USE AN ARRAY as an arugment)
// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored.`);
//   for(let i = 0; i < players.length; i++) {
//     console.log(`${players[i]} scored`);
//   }
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

//7. print which team has better odds to win (DO NOT USE IF/ELSE OR TERNARY OPERATOR)
// team1 < team2 && console.log("Team 1 is more likely to win");
// team2 < team1 && console.log("Team 1 is more likely to win");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for-of loop
// for (const item of menu) {
//   console.log(item);
// }

// for(const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(...menu.entries());
