let arr = ["jj","jjj","dsa"];
let values_iterotor = arr.values();
while(!(item=values_iterotor.next()).done){
    console.log(item.value);
}
let entry_iterotor = arr.entries();
for(let entry of entry_iterotor){
    console.log(entry);
}
for(let item of arr){
    console.log(item);
}
let a = arr.entries();
console.log(a);
