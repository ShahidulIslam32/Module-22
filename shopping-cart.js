//
// const products = [
//     {name: 'laptop', price:40000},
//     {name: 'mobile', price:15000},
//     {name: 'Tv', price:25000},
//     {name: 'Watch', price:1200},
//     {name: 'Air-condition', price:60000},
// ]
//
// let totalPric = 0;
//
// for (const product of products ){
//     totalPrice = totalPrice + product.price
// }
// console.log('your Total shopping amount is',totalPrice, 'BDT/- ')

const cart = [
    {name: 'laptop', price:40000, quantity:2 },
    {name: 'mobile', price:12000, quantity:3},
    {name: 'Tv', price:25000, quantity:1},
    {name: 'Watch', price:1200, quantity:4},
    {name: 'Air-condition', price:40000, quantity:2},
]

let cartTotal = 0;

for (let product of cart){
    console.log(product)
    const totalPrice = product.price * product.quantity
    cartTotal = cartTotal + totalPrice

}
console.log(cartTotal)