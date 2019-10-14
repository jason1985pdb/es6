function* foo(){
    yield "one";
    yield "two";
    yield "three";
    return "ending"
}
let result = foo();
console.log(result.keys);
//let item;
//while(!(item = result.next()).done){
 //   console.log(item.value);
//}
/*console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());*/
for(let a of result){
    console.log(a);
}
