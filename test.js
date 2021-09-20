//Write a sum method which can be invoked either ways.
//a. console.log(sum(2,3));
// Outputs 5 b. console.log(sum(2)(3));
// Outputs 5

//  let sum=function(a,b){
//     return a+b;
// }
//  function curry_sum(sum){
//      return (a)=>{
//          return (b)=>{
//             return a+b;
//          }
//      }
//  }

// let x=curry_sum(sum)

//  console.log(x(2,3))

//  console.log(x(2)(3))

// What is the output of this? Specify the reason.

// (function () {
//   var z = (y = 3);
// })();
// console.log("z defined? " + (typeof z !== "undefined"));
// console.log("y defined? " + (typeof y !== "undefined"));

//  What will the following code output?

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function () {   
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

// 0 -> 10;
// 1 -> 12;
// 2-> 15;
// 3->21;


//What is the output?
//  var x = 23; 
//  (function(){ 
//    var x = 43;
//      (function random(){ 
//          //x++; 
//          console.log(x);
//           var x = 21;
//          })(); 
//          console.log(x);
//         })();