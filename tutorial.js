// alert("hello world");

// let age = 25;
// let year = 2024;

// console.log(age,year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);

//string

// console.log("hello, world");

// let email = 'abc@sdhkj.co.in';
// console.log(email);

// let firstname = "Avani";
// let lastname = "Patel";

// let fullname = firstname + " " + lastname ;
// console.log(fullname);

// console.log(fullname[0]);

// console.log(fullname.length);

// console.log(fullname.toUpperCase());
// let result = fullname.toLowerCase();
// console.log(result,fullname);

// let index = email.indexOf('@');
// console.log(index);



// let email = 'abcxyzabc@gmail.co.in';

//let result = email.lastIndexOf('c');

// let result = email.slice(2,7);

// let result = email.substr(5,10);

// let result = email.replace('b', 'r');

// let result = email.replace('b', 'r')

// console.log(result);

// let ninjas = ['abc', 'xyz', 'pqr','mno'];

// ninjas[1]='Avani';
// console.log(ninjas[1]);

// let ages = [20,26,28,29,30];
// console.log(ages[2]);

// let random = ['avani', 'riya' ,28 ,58];
// console.log(random);

// console.log(random.length);

//  let result = ninjas.join('-');

// let result = ninjas.indexOf('xyz');

// let result = ninjas.concat(['ken','crystal']);

// let result = ninjas.push('avani');
//  result = ninjas.pop();
// console.log(result); 

// console.log(true,false);

// let email = 'avani@patel.co.in';
// let names = ["avani","sakshi","vansh","nishtha"];

// let result = email.includes('@');
// let result = names.includes("nishtha");
// console.log(result);

// let age = 26;
// console.log(age == 25);
// console.log(age == 26);
// console.log(age != 25);
// console.log(age > 30);
// console.log(age < 24);
// console.log(age <= 30);
// console.log(age >= 24);

// let name = "avani";
// console.log(name == "avani");
// console.log(name == "Avani");
// console.log(name == "nishtha");

// console.log(name > 'sakshi');
// console.log(name < 'sakshi');
// console.log(name < 'hii');


//       smallcase letter is always greater than uppercase latter.


// console.log(name < 'Avani');    //false
// console.log(name > 'Avani');    //true
// console.log(name < 'Sakshi');   //false
// console.log(name > 'Sakshi');   //true

//----------------- loose comparision (different types can still be equal)

// let age = 25;

// // console.log(age == 25);
// // console.log(age == '25');  // answer is true because type conversion is doing automatically.

// // console.log(age != 25);
// // console.log(age != '25');

// // ---------------strict comparision (different types cannot be equal)

// console.log(age === 25);    //true
// console.log(age === '25');  //false

// console.log(age !== 25);    //false
// console.log(age !== '25');  //true

//-----------------------------TYPE CONVERSION--------------------------

// let score = '100';

// score =Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');

// let result = String(50);


// let result = Boolean(-100);
// let result = Boolean(100);
//  let result = Boolean(0);
//  let result = Boolean('0');
//  let result = Boolean('');
// console.log(result, typeof result);

//--------------FOR LOOP------------------------

// for(let i=0; i<5; i++){
//     console.log('in loop: ', i);     
// }

// console.log('loop finished');

const names = ['avani', 'yatra', 'diya'];

// for(let i=0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//---------------WHILE LOOP-------------------
// let i = 0;
// while(i<5){
//     console.log('in loop: ', i);
//     i++;
// }

// let i=0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;    
// }

//--------------------DO WHILE LOOP---------------

// let i = 5;

// do {
//     console.log('value of i is: ', i);
//     i++;
// } while (i < 5);

//----------------------if statements---------------

// const age = 25 ;

// if(age > 20){
//     console.log("You are 20 years old.");
// }

// const ninjas = ['avani','sakshi','vansh','nishtha'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas.");
// }

const password = 'p@ss';

// if(password.length >= 8){
//     console.log('that password is long enough!');
// }

//--------------------else if statement--------------

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is might strong.');
// } else if(password.length >= 8 || password.includes('@' && password.length >=5)) {
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough.');
// }



// let user = false;

// if(!user){
//     console.log('you must be logged in to contiue');
// }

// console.log(!true);
// console.log(!false);

//------------------break and continue-----------------------

// const scores = [50,28,34,54,58,98,78,54];

// for(let i=0; i<scores.length; i++){

//     if(scores[i]===28){
//         continue;
//     }

//     console.log("your score: ",scores[i]);

//     if(scores[i] === 54){
//         console.log('you find the number.');
//         break;
//     }
// }

//---------------------SWITCH statement---------------------

const grade = 'D';

switch (grade) {
    case 'A':
        console.log("you got an A!");
    case 'B':
        console.log("you got an B!");
    case 'C':
        console.log("you got an C!");
    case 'D':
        console.log("you got an D!");
    case 'E':
        console.log("you got an E!");
    default:
        console.log("not a valid grade.");
}