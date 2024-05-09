// 1-Object
// function displayObj(obj) {
//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// displayObj({
//   firstName: "Diyorbek",
//   lastName: "Bekmurodov",
//   age: 20,
//   languaues: ["java", "python", "c++"],
//   friends: ["diyorbek", "Umarali", "Behruz", "Alpomish"],
// });
// 2-OBJECT
// let n = prompt();
// let obj = {};

// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }

// console.log(obj);
// 3- object

// let n = prompt();
// let obj = {};
// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }
// console.log(obj);
// 4 - objecttt

// function createObjectFromArray(arr) {
//     var obj = {};

//     for (var i = 0; i < arr.length; i++) {
//         var key = arr[i];
//         var value = key.trim().length;

//         obj[key] = value;
//     }

//     return obj;
// }

// var exampleArray = ["Sultonqul ", "Safarmurod","o'rol","Jahonger"];

// console.log(createObjectFromArray(exampleArray));

// 5 - object;
// let mahsulotlar = { Apilsin: 10000, olma: 12000, Mandarin: 8000, Banan: 20000 };

// let narxlar = Object.values(mahsulotlar);
// let barchaMahsulotlarNarxi = narxlar.reduce((a, b) => a + b, 0);

// console.log("Hama mevalar turishi:", narxlar.length);
// console.log("Hama mevalar narxi:", barchaMahsulotlarNarxi);

// 6-objecct
// function defineObject(obj) {
//   var keys = Object.keys(obj);

//   for (var i = 0; i < keys.length; i++) {
//     if (typeof obj[keys[i]] !== "string") {
//       return false;
//     }
//   }
//   return true;
// }

// var exampleObject = {
//   key1: "salom1",
//   key2: "salom2",
//   key3: "salom3",
// };

// console.log(defineObject(exampleObject));
///////////
