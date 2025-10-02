import * as cartService from "./service/cart.js"
import createItem from "./service/item.js";

const MyCart = [];
const myWhishList = [];

console.log("welcome to the your shoope cart! ")

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adicionamos dois items ao carrinho 
await cartService.addItem(MyCart,item1)
await cartService.addItem(MyCart,item2)

await cartService.removeItem(MyCart,item2)

await cartService.displaycart(MyCart)

// delete dois item do carrinho 
// await cartService.deleteItem(MyCart,item2.name)
// await cartService.deleteItem(MyCart,item1.name)



await cartService.calculateTotal(MyCart);
