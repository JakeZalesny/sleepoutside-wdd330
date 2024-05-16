import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  // add product to cart
  if (getLocalStorage("so-cart")) {
    const cart = getLocalStorage("so-cart");
    cart.push(product);
    setLocalStorage("so-cart", cart);
  } else {
    setLocalStorage("so-cart", [product]);
  }
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);