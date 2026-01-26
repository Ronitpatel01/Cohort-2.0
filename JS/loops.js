// let count = 0;
// for (let i = 0; i < 5; i++) {
//   let num = prompt(`Enter number ${i + 1}`);
//   if (i > 0) count++;
// }
// alert(`Total positive numbers are ${count}`);

// let password = "123@123";
// let count = 3;
// do {
//   let pass = prompt("Enter your password").trim();
//   if (pass === null) alert("Enter your password");
//   else if (pass === "") alert("kuch toh likho");
//   else if (pass !== password) {
//     count--;
//     if (count) {
//       alert(`Only ${count} chances left`);
//     } else {
//       alert("Access permanently revoked !!");
//       break;
//     }
//   } else {
//     alert("Aaiye padhariye");
//     break;
//   }
// } while (count);

// let output = "";
// for (let i = 1; i < 51; i++) {
//   if (!(i % 7)) {
//     output +=(i + " ");
//   }
// }
// console.log(output);

// let sum = 0;
// for (let i = 1; i < 31; i++) {
//   if (i % 2) {
//     sum += i;
//   }
// }
// console.log(sum);

// function discountCalculator(discountPercent) {
//   return function (val) {
//     return val - (val * discountPercent) / 100;
//   };
// }
// let dis10 = discountCalculator(10);
// let discountedPrice = dis10(250);
// alert(discountedPrice);
// alert(typeof (10 / 100));

// (function () {
//   alert("I run instantly!!");
// })(); IIFE

// function outer() {
//   let i = 12;
//   function inner() {
//     alert(i);
//   }
//   inner();
// }
// outer();

// let obj = { name: "Ronit", age: 22, city: "Indore" };
// for (let key in obj) {
//   console.log(obj[key]);
// }

// setTimeout(() => {
//   alert("5 seconds have passed");
// }, 5000);

// function runTwice(fn) {
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello!");
// }
// runTwice(sayHello);

// function des(obj) {
//   const { name, age } = obj;
//   console.log(name, "  Age: ", age);
// }

// let obj = { name: "Ronit", age: 22 };

// des(obj);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

// let obj = { name: "Ronit", age: 22 };
// Object.freeze(obj);
// obj.name= Rishabh;

