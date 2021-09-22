// Q1 >> What’s the output of this code?
// let car = {
//     name:"AudiQ7",
//     sayName(){
//         console.log(this.name)
//     }

// }
// let sayNmae = car.sayName;
// sayNmae();

// output : undefined

// Q2  >>

// function greet(person){
//     if(person=={name:"Newton"}){
//         console.log("hey Newton");
//     }
//     else{
//         console.log("hey School")
//     }
// }

// greet({name:"Newton"});

// output : hey School

// Q3 >>

// var car = new Vehicle("Honda" ,"white" , "2010","UK");
// console.log(car)

// function Vehicle(model,color,year,country){
//     this.model=model;
//     this.color=color;
//     this.year=year;
//     this.country=country;
// }

// output : Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }

//Q 4 >>

// function foo(){
//     let y=x=2;
//     x++;
//     y++;
//     return x;
// }
// console.log(foo(),typeof y ,typeof x);

// output : 3 'undefined' 'number'

//Q 5 >>

// function main(){
//     console.log("A");
//     setTimeout(
//         function print(){
//             console.log("B");
//         },0
//     )
//     console.log("C");
// }
// main()

// output : A ,C ,B

//Q 6 >>

// var y =1;
// if(function f(){}){
//      y+= typeof f;
//     console.log(y)
// }
// console.log(y)
//console.log(function f(){})

// output : 1undefined

//7. What’s the output of this code?

// var myChars = ['a', 'b', 'c', 'd']
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// output :  [empty, 'b', 'c', 'd'], undefined, 4

//8. What’s the output of this code?

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// output : true, false

//9. What’s the output of this code in non-strict mode?

// function printNumbers(first, second, first) {
// console.log(first, second, first);
// }
// printNumbers(1, 2, 3);

// output : 3, 2, 3

//10. What’s the output of the following code?

// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));

// output  ReferenceError: arguments is not defined

//11. What’s the output of the following code?
// console.log(10 == [10]);
// console.log(10==[[[[[[[10]]]]]]]);

// output : true ,true

// 12. What’s the output of the following code?

// console.log([0] == false);
// if([0]) {
// console.log("I'm True");
// } else {
// console.log("I'm False");
// }

// output : true ,I'm True

//13. What’s the output of the following code?

// async function func() {
// return 10;
// }
// console.log( func());

// outout :  Promise {<fulfilled>: 10}

//14. What’s the output of the following code?

// async function func() {
// await 10;
// }
// console.log(func());

// outout : Promise { <pending> }

//15. What’s the output of the following code?

// let myNumber = 100;
// let myString = '100';
// if (!typeof myNumber === "string") {
// console.log("It is not a string!");

// } else {
// console.log("It is a string!");
// // console.log(!typeof myNumber);
// }
// if (!typeof myString === "number"){
// console.log("It is not a number!")
// } else {
// console.log("It is a number!");
// }

// output : It is a string!, It is a number!

//16. What’s the output of the following code?

// class A {
// constructor() {
// console.log(new.target.name)
// }
// }
// class B extends A { constructor() { super() } }

// new A();
// new B();

// output A, B

//17. What’s the output of the following code?

// const [x, ...y,] = [1, 2, 3, 4];
// console.log(x, y);

// output :SyntaxError: Rest element must be last element

//18. What’s the output of the following code?

// const {a: x = 10, b: y = 20} = {a: 30};
// console.log(x);
// console.log(y);

// output : 30, 20

// 19. What’s the output of the following code?
// function area({length = 10, width = 20}) {
// console.log(length*width);
// }
// area();

// output :Cannot read properties of undefined

// 20. What’s the output of the following code?

// const props = [
// { id: 1, name: 'John'},
// { id: 2, name: 'Jack'},
// { id: 3, name: 'Tom'}
// ];
// const [{id},, { name }] = props;
// console.log(name , id);

// output : Tom 1

//21. What’s the output of the following code?

// function add(item, items = []) {
// items.push(item);
// return items;
// }
// console.log(add('Orange'));
// console.log(add('Apple'));

// output : ['Orange'], ['Apple']

//22. What’s the output of the following code?

// function myFun(x, y, ...manyMoreArgs) {
// console.log(manyMoreArgs)
// }
// myFun(1, 2, 3, 4, 5);
// myFun(1, 2);

// output: [3, 4, 5], []

//23. What’s the output of the following code?

// function* myGenFunc() {
// yield 1;
// yield 2;
// yield 3;
// }
// var myGenObj = new myGenFunc;
// console.log(myGenObj.next().value);

// output: TypeError

//24. What’s the output of the following code?

// let count = 10;
// (function innerFunc() {
// if (count === 10) {
// let count = 11;
// console.log(count);
// }
// console.log(count);
// })();

// output: 11, 10

//25. What’s the output of the following code?

// let zero = new Number(0);
// if (zero) {
// console.log("If" + zero);
// } else {
// console.log("Else");
// }

// output: if 0;

// 26. What’s the output of the following code?

// class Vehicle {
//   constructor(name) {
//     this.name = name;
//   }

//   start() {
//     console.log(`${this.name} vehicle started`);
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log(`${this.name} car started`);
//     super.start();
//   }
// }
// const car = new Car("BMW");
// console.log(car.start());

// output: BMW car started, BMW vehicle started;

//27. What’s the output of the following code?

// function Person() {}
// Person.prototype.walk = function () {
//   return this;
// };
// Person.run = function () {
//   return this;
// };
// let user = new Person();
// let walk = user.walk;
// console.log(walk());
// let run = Person.run;
// console.log(run());

// output: Window, Window

//28. What’s the output of the following code?

// const squareObj = new Square(10);
// console.log(squareObj.area);
// class Square {
// constructor(length) {
// this.length = length;
// }
// get area() {
// return this.length * this.length;
// }
// set area(value) {
// this.area = value;
// }
// }


// output:  ReferenceError :Cannot access 'Square' before initialization

//29. Is it a valid array?
//No not valid..
//let arr = let arr = [2,'A',"B",true,[6,7,[9,0]]];


  //this is valid ..
// let arr = [2,'A',"B",true,[6,7,[9,0]]];
// console.log(arr)


//30. What’s the output of the following code?

// let a = new String("abc");
// let b = new String("abc");
// if(a==b){
// console.log("yes");
// }else{
// console.log("no", a==b);
// }

// output: no 


//31. What’s the output of the following code?
// let a = new String("abc");
// let b = new String("abc");
// if(a==b){
// console.log("yes");
// }else{
// console.log("no");
// }

// output: No

// 32. What’s the output of the following code?

// let a = new String("abc");
// let b = "abc";
// if(a==b){
// console.log("yes");
// }else{
// console.log("no");
// }

// output: yes

//33. What’s the output of the following code?

// console.log(1);
// console.log(2);

// setTimeOut(() => {
// console.log(3);
// },0)


// console.log(4);

// output: 1,2, setTimeOut not defined  written in camelCase

//34. What’s the output of the following code?

// var num = 0;
// function run(){

// console.log(num);
// var num = 1;
// }
// run();

// output: Undefined

// 35. What will the code below output to the console and why?

// var myObject = {
// foo: "bar",
// func: function() {
// var self = this;
// console.log("outer func: this.foo = " + this.foo);
// console.log("outer func: self.foo = " + self.foo);
// (function() {
// console.log("inner func: this.foo = " + this.foo);
// console.log("inner func: self.foo = " + self.foo);
// }());
// }
// };
// myObject.func();


// output: outer func: this.foo = bar
// index.js:412 outer func: self.foo = bar
// index.js:414 inner func: this.foo = undefined
// index.js:415 inner func: self.foo = bar

// 36. In what order will the numbers 1-4 be logged to the console
// when the code below is executed? Why?


// (function() {
// console.log(1);
// setTimeout(function(){console.log(2)}, 1000);
// setTimeout(function(){console.log(3)}, 0);
// console.log(4);
// })();


// output: 1, 4 ,3, 2

//37. Consider the code snippet below. What will the console output be and why?

// (function(x) {
// return (function(y) {
// console.log(x);
// })(2)
// })(1);

// output: 1

// 38. Testing your this knowledge in JavaScript: What is the
// output of the following code?

// var length = 10;
// function fn() {
// console.log(this.length);
// }
// var obj = {
// length: 5,
// method: function(fn) {
// fn();
// arguments[0]();
// }
// };
// obj.method(fn, 1);

// output: 10 ,2

//39. What will the following code output and why?

// var b = 1;
// function outer(){
// var b = 2
// function inner(){
// b++;
// console.log(b)
// var b = 3;
// console.log(b)
// }
// inner();
// }
// outer();


// output: nan, 3 

