// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

//coding challenge #1
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degrees celsius in ${i + 1} days... `;
  }
  return str;
};

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
console.log(printForecast(testData1));
