// o que pensar 
// quais ações meu carrinho pode fazer 


// Caso de uso 

// -->  adicionar item no carrinho ✅
async function addItem(userCart,item) {
    userCart.push(item)
}
// --> deletar item no carrinho
async function deleteItem(userCart,name) {
    const index = userCart.findIndex((item)=> item.name === name)

    if (index !== -1 ){
        userCart.splice(index,1)
    }
}


// -->  remover um item 
async function removeItem(userCart, item){
    // 1 encontra o indice do item 
 const indexFound = userCart.findIndex((p)=>p.name === item.name)
 if (indexFound === -1){
    console.log("item nao encontrado");
    return;
 }
    // item mair do que um subtarir , item = 1 deletera o item 
    if (userCart[indexFound].quantity > 1 ){
        userCart[indexFound].quantity -= 1
        return;
    }
  4 // item = 1 deletera o item
  if (userCart[indexFound].quantity === 1){
    userCart.splice(indexFound,1)
    return;
  }
}

// --> calcular o total
async function calculateTotal(userCart){
    console.log("\n shopee cart TOTAL IS:")
   const result =  userCart.reduce((total,item)=> total + item.subtotal(), 0);
   console.log(`\n 🛒Total: ${result}`);
}

async function displaycart(userCart) {
    console.log("\n shopee cart list:")
    userCart.forEach(( item , index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | subtotal =  ${item.subtotal()}`)
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}