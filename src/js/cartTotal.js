import { getLocalStorage } from "./utils.mjs";

let totalElement = document.querySelector(".hide");
let cartTotalElement = document.querySelector(".cart-total");
let totalCost = 0;

const cartNumber = getLocalStorage("so-cart");

if (cartNumber.length > 0) {
  totalElement.style.display = "block";

  for (let i = 0; i < cartNumber.length; i++) {
    totalCost += cartNumber[i].FinalPrice;
  }

  cartTotalElement.innerHTML = `Total: $${totalCost.toFixed(2)}`;
}
