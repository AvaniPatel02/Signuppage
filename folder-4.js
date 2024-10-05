// //function declaration

// function greet(){
//     console.log('hello there');
// }

// //function call
// greet();


//-----------function expression

// const speak = function(){
//     console.log('good day!');

// };

// speak();
// speak();

// const speak = function(name,time){
//     console.log(`good day ${name} ${time}`);
// };
// console.log(name)

// speak('mario','morning');

//--------------arguments and parameters--------------

// const speak = function(name='avani',time='night'){
//     console.log(`good ${time} ${name}`);
// };
// console.log(name)

// speak();
// speak("sakshi","morning");
// speak("nishtha",);
// speak("night");


// const calcArea = function(radius){
//     return  3.14 * radius**2;

// };
// const a = calcArea(5);
// console.log(a);

// const calcVol = function(area){
//     return  3.14 * area**2;
// };
// calcVol(10);
// console.log(a);

// // -----------------regular expreetion--------------
// const calcArea = function(radius){
//     return 3.14* radius**2;
// };

// const area = calcArea(5);
// console.log('area is: ', area);

//----------------------arrow function-------------------

// const calcArea = (radius) =>{        // no need of () if only 1 parameter is there.
//     return 3.14* radius**2;
// };

// **********we can write like this also***************

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is: ', area);/


//----------------EXAMPLE----------------

//REGULAR FUNCTION-------------
// const greet = function(){
//     return 'hello world';

// };
// const a = greet();
// console.log(greet);

//ARROW FUNCTION-------------------
// const greet = () => ('hello world');
// const result = greet();
// console.log(greet);

//regular function---------------------

// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };
// console.log(bill([10, 15, 30], 0.2));

//arrow function

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));


// const name = "avani";

// //function 
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//--------------------------callbacks & foreach----------------------------

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);

// };

// myFunc(value => {
//     console.log(value);
// });

// let people = ["avani","aditi","priyanshi","jainy","vini"];

// const logPerson = (person,index) => {
//     console.log(`${index} - hello ${person}`);
// };

// // people.forEach((person,index) => {
// //     console.log(index,person);
// // });

// people.forEach(logPerson);

// const  ul = document.querySelector('.people');

// const people = ["avani", "jina", "jiya","janvi","purva"];

// let html=``;

// people.forEach(function(person){

//     html += `<li style="color: purple">${person}</li>`;

// });

// console.log(html);