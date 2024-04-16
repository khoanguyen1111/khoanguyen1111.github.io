let shoppingCart= [
    {name:"t-shirt", price:20},
    {name:"jeans", price:50},
    {name:"sneaker", price:80},
    {name:"backpack", price:30},

];
function calculateTotal (){
let total =0;
for (i = 0; i< 4; i++){
    total += shoppingCart[i].price;
    console.log(total);
}

let discount = 0.1;
let discountedPrice=0;
if (total>100)
{
    discountedPrice= total-total*discount;
}
console.log("the total is ", total);
console.log("discounted price", discountedPrice);
}
calculateTotal();