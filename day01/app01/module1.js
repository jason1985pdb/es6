
let a = 3;
function sayA(){
    console.log(a);
}
let obj = {
    name:"jj",
    age:18
}
module.exports.a = a;
module.exports.sayA = sayA;
console.log('this is module.js');
