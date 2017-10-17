// let obj1 = {
//     name: 'a',
//     // speak(){
//     //     console.log(this.name);
//     // }
// };

// let obj2 = {
//     name: 'b',
//     speak(){
//         console.log(this.name);
//     }
// }

// // obj1.speak();
// obj2.speak();

// obj2.speak.call(obj1);

// if (false) {
//     let a = 6;
//     var b = 5;
// }

// console.log(a);
// console.log(b);


// let obj1 = {
//     name: 'a'
// }

// let obj2 = {
//     name: 'b',
//     speak(){
//         console.log(this.name);
//     }
// }

// obj2.speak.call(obj1);
// obj2.speak.apply(obj1);

// let testFunc = obj2.speak.bind(obj1);

// /*
// let testFunc = function(){
//     console.log(obj1.name);
// }
// */

// obj2.speak = function(){
//     console.log('hello');
// }

// testFunc();