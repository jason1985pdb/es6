let obj = {
    name:"jj",
    age:21
}
let map = new Map(Object.entries(obj));
console.log(map);

let c = new Map();
console.log(c.size(obj));
