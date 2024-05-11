import { getLocalStorage } from "./utils.mjs";

const number = getLocalStorage("so-cart");

const cartCountSpan = document.querySelector(".cart-count");

if (number) {
  const itemCount = number.length; // Get the number of items in the cart
  cartCountSpan.textContent = itemCount;
} else {
  cartCountSpan.textContent = 0;
}
