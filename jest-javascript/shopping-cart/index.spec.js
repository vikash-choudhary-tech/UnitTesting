const {
  addItemsToCart,
  removeItemFromCart,
  updateItemQuantities,
  resetCart,
  cart,
} = require("./index");

describe("Shopping Cart", () => {
  beforeEach(() => {
    resetCart();
  });
  it("add item to the cart", () => {
    const item = { name: "Apple", id: 1, price: 20 };
    addItemsToCart(item);
    expect(cart).toEqual([{ name: "Apple", id: 1, price: 20 }]);
  });

  it("remove item from the cart", () => {
    const itemId = 1;
    removeItemFromCart(itemId);
  });

  it("Expects the cart to be empty", () => {
    expect(cart.length).toBe(0);
  });

  it("expects cart to have certain items for instance 3", () => {
    const item1 = { name: "Banana", id: 2, quantity: 10 };
    const item2 = { name: "Grapes", id: 3, quantity: 20 };
    const item3 = { name: "Oranges", id: 4, quantity: 30 };

    addItemsToCart(item1);
    addItemsToCart(item2);
    addItemsToCart(item3);

    expect(cart.length).toBe(3);
  });

  it("expects item quantity to be updated", () => {
    const item1 = { name: "Banana", id: 2, quantity: 10 };
    const item2 = { name: "Grapes", id: 3, quantity: 20 };
    const item3 = { name: "Oranges", id: 4, quantity: 30 };

    addItemsToCart(item1);
    addItemsToCart(item2);
    addItemsToCart(item3);

    updateItemQuantities(50, item1);

    const updatedItem1 = cart.filter((item) => item.id === item1.id);
    expect(updatedItem1[0].quantity).toBe(50);
  });
});
