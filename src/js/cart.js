import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <span data-id="${item.Id}" class="cart-card__remove">X</span>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function removeProductFromCart(product) {
  // remove product from cart
  const cart = getLocalStorage("so-cart");
  console.log(product);
  const newCart = cart.filter((item) => item.Id !== product);
  console.log(newCart);
  setLocalStorage("so-cart", newCart);

  location.reload();
}

renderCartContents();

document.querySelectorAll(".cart-card__remove").forEach(button => {
  console.log("button added", button)
  button.addEventListener("click", function(event) {
      const productId = event.target.getAttribute('data-id');
      removeProductFromCart(productId);
  });
});
