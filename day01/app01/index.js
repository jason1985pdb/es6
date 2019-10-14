let module1 = require('./module1')
//let common = require('./node_modules/common')

let common = require('common')

let module2 = require('./module2')

console.log('this is a index.js');
module1.sayA();
console.log(module1);
console.log(common);
console.log(module2);
