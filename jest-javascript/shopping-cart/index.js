let cart = [];

function addItemsToCart(item) {
  cart.push(item);
  return cart;
}

function removeItemFromCart(item) {
  cart.splice(item.id, 1);
  return cart;
}

function updateItemQuantities(quantity, item) {
  return cart.map((curr) => {
    if (curr.id === item.id) {
      curr.quantity = quantity;
    }
    return curr;
  });
}

function resetCart() {
  cart.length = 0;
}

addItemsToCart({ id: 1, name: "Apple", quantity: 20 });
addItemsToCart({ id: 1, name: "Apple", quantity: 20 });
updateItemQuantities(30, { id: 1, name: "Apple", quantity: 20 });
console.log(cart);

// removeItemFromCart(1);

module.exports = {
  addItemsToCart,
  removeItemFromCart,
  updateItemQuantities,
  resetCart,
  cart,
};
