    let shopCar = new Map();
    let line = {
    productId:1,
    productName:"可口可乐",
    productPrice:2.5,
    number:3
    }
function addShopcar(item){
        shopCar.set(item.productId,item)
}

addShopcar(line);
addShopcar({productId:2,productName:"方便面",productPrice:3,number:2});
console.log(shopCar);
