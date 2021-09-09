"use strict";
/*
console.log(1 + 2 + "apples" + [1, 2, 3]);
console.log("you" + 1000);
console.log("you" * 1000);
console.log("2" * 1000);
console.log(Math.sqrt(-9));

const myNum = "m";
if (isNaN(myNum)) console.log(myNum);

if (99 == "99") {
  console.log("A number equals a string!");
} else {
  console.log("No way a number equals a string");
}

console.log(22 === "22");

console.log(1 === true);

console.log("0" === false);
console.log("true" === true);
console.log(true === (1 === "1"));

var stolenDiamond = {};
console.log(stolenDiamond);

const check = function (number) {
  if (number.includes("-") || number.charAt(3) === "-") {
    if (number.length === 9) {
      console.log(number);
    } else console.log("invalid number type");
  }
};

check("020-47154");
check("14-478547");
check("2225-522");

function getPropertyNames(o, a) {
  if (a === undefined) a = []; // If undefined, use a new array
  for (var property in o) a.push(property);
  return a;
}
console.log(getPropertyNames(7));

function counter(n) {
  // Function argument n is the private variable
  return {
    // Property getter method returns and increments private counter var.
    get count() {
      return n++;
    },
    // Property setter doesn't allow the value of n to decrease
    set count(m) {
      if (m >= n) n = m;
      else throw Error("count can only be set to a larger value");
    },
  };
}

var c = counter(1000);
console.log(c.count); // => 1000
console.log(c.count); // => 1001
console.log((c.count = 2000));
console.log(c.count); // => 2000
// console.log((c.count = 2000)); //error cos its eual to the n or less
console.log((c.count = 5000));
*/

// function getPlanetName(id) {
//   let name;
//   switch (id) {
//     case 1:
//       name = 'Mercury';
//       break;
//     case 2:
//       name = 'Venus';
//       break;
//     case 3:
//       name = 'Earth';
//       break;
//     case 4:
//       name = 'Mars';
//       break;
//     case 5:
//       name = 'Jupital';
//       break;
//     case 6:
//       name = 'Saturn';
//       break;
//     case 7:
//       name = 'Uranus';
//       break;
//     case 8:
//       name = 'Neptune';
//       break;

//     //   break;

//     // default:
//     //   break;
//   }

//   return name;
// }

// console.log(getPlanetName(3));

// function solution(str) {
//   let splitString = str.split('').reverse().join('');
//   return splitString;
// }

// console.log(solution('boy'));

// function sheeps(arr) {
//   let boo = [];
//   arr.forEach((i) => {
//     if (i === true) {
//       boo.push(i);
//     }
//   });
//   return boo.length;
// }

// console.log(sheeps([true, true, true, false, false, true]));

// function getCount(str) {
//   let vowelsCount = 0;

//   let b = str.toLowerCase();

//   console.log(b);
//   let u = b.split("");

//   console.log(u);

//   u.forEach((st) => {
//     if (st === "a" || st === "i" || st === "e" || st === "o" || st === "u")
//       return (vowelsCount += 1);
//   });

//   return vowelsCount;
// }
// console.log(getCount("AISHAT"));

// function makeNegative(num) {
//   // let numString = num.toString();
//   // console.log(numString);
//   // console.log(typeof numString);

//   return num <= 0 ? num : -num; //best and simple answer

//   // return numString.includes("-") && numString <= 0
//   //   ? Number(numString)
//   //   : -numString;//works but not for 0 cos it will be -0
// }

// // makeNegative(1);
// console.log(makeNegative(0));
// console.log(makeNegative(-8));
// console.log(makeNegative(5));
// console.log(makeNegative(6));

// // class SmallestInteger {
// //   findSmallestInteger(args) {
// //     args.forEach((arg) => {
// //       if (arg < arg) {
// //         console.log(arg);
// //       }
// //     });
// //   }
// // }

// function findSmallestInteger(args) {
//   const boo = args.reduce((acc, cur) => (acc > cur ? cur : acc));
//   return boo;
// }

// console.log(findSmallestInteger([2, 5, 1]));
// console.log(findSmallestInteger([10, 12, 19, 44, 50, 9, 2]));

// function checkAge(arr) {}
// // checkAge([11, 10, 14, 25, 20]);
// console.log(checkAge([8, 7, 10, 12]));

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// console.log(currencies);

// let arr = [10, 12, 19, 44, 50, 9, 2];
// arr.reverse();
// console.log(arr);

// const currenciesUniue = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUniue);

// currenciesUniue.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// arr.fill(23, 2, 6);
// console.log(arr);

// function yoo() {
//   let str = "how can you help me";
//   let arr = str.split(" ");
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase();
//   }
//   // arr.forEach((i) => {

//   // });
// }

// yoo();

// PLURASIGGHT
// function myIterator(start, finish) {
//   let index = start;
//   let count = 0;

//   return {
//     next() {
//       let result;
//       if (index < finish) {
//         result = { value: index, done: false };
//         index += 1;
//         count++;
//         return result;
//       }

//       return {
//         value: count,
//         done: true,
//       };
//     },
//   };
// }

// const it = myIterator(0, 10);
// let res = it.next();

// while (!res.done) {
//   console.log(res.value);
//   res = it.next();
// }

// const arr = [0, 3, 4, 6];

// const it = arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const map = new Map();

// map.set("key1", "value 1");
// map.set("key2", "value 2");

// const mapIterator = map[Symbol.iterator]();
// console.log(mapIterator.next().value);
// console.log(mapIterator.next().value);

// window.addEventListener("orientationchange", function (e) {
//   let screen = window.screen;
//   let angle = screen.orientation.angle;
//   let type = screen.orientation.type;

//   console.log(`angle: ${angle}, type: ${type}`);
// });

// for (const [key, value] of map) {
//   console.log(`${key} and ${value}`);
// } //for of use loop use symbol.iterator under the hook to return each value

// const mySet = new Set();
// mySet.add("noo");
// mySet.add("dos");

// const setIterator = mySet[Symbol.iterator](); //creating an iterator
// console.log(setIterator.next());
// console.log(setIterator.next());
// console.log(setIterator.next());

// for (const value of mySet) {
//   console.log(value);
// }

// function myIterator(start, finish) {
//   let index = start;
//   let count = 0;

//   return {
//     next() {
//       let result;
//       if (index < finish) {
//         result = { value: index, done: false };
//         index += 1;
//         count++;
//         return result;
//       }

//       return {
//         value: count,
//         done: true,
//       };
//     },
//   };
// }

// const it2 = myIterator(0, 10);

// for (let val, result; (result = it2.next()) && !result.done; ) {
//   val = result.value;
//   console.log(val);
// }

// const f = [9, 10, 140, 68].findIndex((element) => element > 10000);
// console.log(f);

// const v1 = "2";
// const v2 = "2";

// const result = v1 / v2;

// console.log(result);

// static method are called class

const users = [
  {
    id: 1,
    name: "tola",
    liked: false,
  },
  {
    id: 2,
    name: "musa",
    liked: true,
  },
  {
    id: 3,
    name: "steven",
    liked: true,
  },
  {
    id: 4,
    name: "bola",
    liked: false,
  },
  {
    id: 5,
    name: "victor",
    liked: true,
  },
];

const songLiked = {
  raba: ["tola", "steven"],
  flex: ["victor", "bola"],
  lie: ["tola", "steven", "musa"],
};

const trying = function (user) {
  for (const key in songLiked) {
    console.log(key);
    console.log(songLiked[key]);
    songLiked[key].map((item) => {
      if (item.includes(user)) {
        alert(`${user} liked ${key}`);
      }
    });
  }
};

trying("tola");
