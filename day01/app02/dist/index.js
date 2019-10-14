'use strict';

var arr = ['jj', 'pdb'];
var obj = {
    name: 'jj',
    age: 12
};
var name = obj.name,
    age = obj.age;

console.log(name, age);
arr.forEach(function (item) {
    console.log(item);
});
