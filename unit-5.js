//object literals

// let user = {
//     name: 'avani',
//     age: 20,
//     email: 'avaniptl@gmail.com',
//     location: 'india',
//     blogs: ['hello world','javascript is good technology to learn.']
// };

// //access the element
// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// console.log(user['email']);
// console.log(user['location']);

// //update value
// user['name'] = 'ravi';
// console.log(user['name']);

// console.log(typeof user);

// let user = {
//     name: 'avani',
//     age: 20,
//     email: 'avaniptl@gmail.com',
//     location: 'india',
//     blogs: ['hello world','javascript is good technology to learn.'],
//     login: function(){
//         console.log("the user logged in");
//     },
//     logout: function(){
//         console.log("the user logged out");
//     },
//     logBlogs: function(){  // if this could be an arrow function then "this" keyword could not work.
//         // console.log(this.blogs);
//         console.log("this user has written the following blogs: ");
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         });
//     }
// };

// // user.login();
//  user.logBlogs();
// console.log(this);

// const movie = [
//     {title : 'RRR', likes : 500},
//     {title : 'PK' , likes : 200}
// ];
// console.log(movie);

//----------------------MATH OBJECT------------------------------------

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers

// const random = Math.random(); //always between 0 and 1.
// console.log(random);
// console.log(Math.round(random * 100)); // random number between 1 to 100

//----------------------Primitive values------------------------------

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//------------------------Reference values--------------------------------

const userOne = {name: 'avani', age: 20};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = "39"
console.log(userOne,userTwo);

