"use strict";


// if (valueA == 10 && valueB == 20) { }


// let length = 16;            // Number
// let lastName = "Antanas";   // String
// let x = {
//   firstName: "Petras",
//   lastName: "Auksinis",
// };                          // Object

// let x = 16 + "Volvo";


// let typeString = "Tekstas"
// let typeObject = { tekstas: "Alio" }
// let typeArray = ['vienas', 10, { a: 5 }]
// let typeUndefined;
// let typeNull = null;
// let typeBoolean = false;

// typeof { name: 'John', age: 34 } // Returns "object"
// typeof [1, 2, 3, 4]             // Returns "object"
// typeof null                  // Returns "object"
// typeof function myFunc() { }   // Returns "function"


// function funkcija(argumentas1, argumentas2) {
//   return argumentas1 - argumentas2;
// }

// let a = [1, 2, 3, 4];

// if (condition) {
//   //  block of code to be executed if the condition is true
// }

// for ('statement 1'; 'statement 2'; 'statement 3') {
//   // code block to be executed
// }


// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

// let typeObject = {}
// let typeArray = []

// function test(a, b, c, d, e) {
//   if (typeof a === 'string') {

//   }
//   if (typeof a === 'object') {

//   }
// }

// let testObject = {
//   a: 'test',
//   b: 2,
//   c: 3
// }

// testObject[1] = 1;
// testObject[2] = 2;
// testObject[3] = 3;

// console.log(testObject)


// let testArray = [1, 2, 3, 4, 5];

// testArray.test = "ALIO";

// let a = testArrayFromAjaxServerSideDataWithCatsAndDogs;

// otherArray.test2 = "PRIVET";

// console.log(testArray);
// console.log(otherArray)
// testArray.push(6);

// let testObject = {
//   a: 'test',
//   b: 'test2',
// }

// let copyObject = testObject;

// copyObject.a = 10

// testObject = "ALIOO";
// console.log(testObject)
// console.log(copyObject)

// for (let i = 0; i < 10; i += 1) {
//   // console.log(testArray[i]);
// }


// let a = 10;

// let b = (a == 10) ? 5 : 100;

// if (a == 10) {
//   b = 5;
// } else {
//   b = 100;
// }

// let exitWhile = false;
// let i = 0;
// while (!exitWhile) {
//   console.log(i);
//   i++;
//   if (i == 25) {
//     exitWhile = true;
//   }
// }


/**
 * naudoti masyva: [0,1,2,3,4,5,6,7,8,9,10,11,12]
 * Naudojant for loop į console atvaizduoti tik tuos
 * elementus kurie dalinasi 4 ( pridėti ženklą "@" )
 * ir tuos elementus kurie yra 3 kartotiniai ( pridėti ženklą "*" )
 *
 * O jeigu abu scenarijai teisingi pridėti ženklą "!"
 */

let masyvas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < masyvas.length; i++) {
  let item = masyvas[i];

  if (item % 4 == 0) { console.log(item + 'test') };

  if (item % 4 == 0 && item % 3 == 0) {
    item += '!';
  } else if (item % 4 == 0) {
    item += '@';
  } else if (item % 3 == 0) {
    item += '*';
  }

  // let character = '';
  // if ((item % 4) == 0) {
  //   character = "@";
  // }
  // if ((item % 3) == 0) {
  //   character = "*";
  // }
  // if ((item % 4) == 0 && (item % 3) == 0) {
  //   character = "!";
  // }
  console.log(item);

}






// Array.isArray(typeArray)
// console.log(Array.isArray(typeObject))