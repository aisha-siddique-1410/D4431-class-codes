

// function() {
//     console.log("Function expression");
// }



// const add = require('./sum');

// const result = add(10, 20);
// console.log(result);
// function greet(){
//     console.log("hello");
// }

// greet();


// import method
// const math = require('./sum');  // common JS

// console.log(math.add(10,20));
// console.log(math.subtract(10, 20));
// console.log(math.multiply(2, 3));

// // destructing while importing

// const {add, subtract, multiply} = require('./sum');

// console.log(add(10,20),
// subtract(10, 5), multiply(10,5));





//  ES Module
// import { add, multiply, subtract } from "./sum.js";


// console.log(add(10,20));
// console.log(subtract(10, 20));
// console.log(multiply(2, 3));

// import { length, hasNUmber, hasSpecialCHaracter } from "./validator.js";

// const password = "passwor";

// const isStrong = length(password) && hasNUmber(password) && hasSpecialCHaracter(password);

// console.log(`
//     Password : ${password}
//     Length : ${length(password)}
//     Has Number : ${hasNUmber(password)}
//     Has Special Char : ${hasSpecialCHaracter(password)}
//     Password Strength:  ${isStrong ? "Strong" : "Weak"}`);



// FS module

// create a file and write 
 const fs = require('fs');

//  fs.writeFile('example.txt', 'This is new text', (err) => {
//     if(err){
//         console.error('Error writing file:', err)
//     }else {
//         console.log('File written successfully');
//     }
//  })

// read fie
// fs.readFile('abc.txt', 'utf-8', (err, data) => {
//      if(err){
//         console.error('Error reading file:', err)
//     }else {
//         console.log('File Content:', data);
//     }
// });

// append file
// fs.appendFile('example.txt', '\n This line wA added', (err) => {
//     if(err) throw err;
//     console.log('New Content added')
// });

// delete file
fs.unlink('eaxmple.txt', (err) => {
        if(err) throw err;
    console.log('File Deleted')
})