let array_like = {"0":"jj","1":"pdb",length:2}
console.log(array_like);
let {slice} = [];
//let array = slice.call(array_like,0);
let array =[].slice.call(array_like,0);
console.log(array);
console.log(Array.from(array_like));
