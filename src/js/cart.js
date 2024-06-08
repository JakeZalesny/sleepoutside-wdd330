import { applyDiscount, getRandomFloat } from "./applyDiscount.mjs";
import ShoppingCart  from "./components/ShoppingCart.svelte";


// Set to true if discount is applied
// let discountApplied = false;

new ShoppingCart({
  target: document.querySelector(".products"),
});

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   if (cartItems.length > 0) {
//     // Select a random index
//     const randomIndex = Math.floor(Math.random() * cartItems.length);
//     // Apply the discount to the random item
//     applyDiscount(cartItems[randomIndex]);

//     // Update local storage with the modified cart items
//     setLocalStorage("so-cart", cartItems);
//   }
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   if (discountApplied) {
//     let newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <span data-id="${item.Id}" class="cart-card__remove">X</span>
//   <p class="cart-card__discountedPrice">$${item.ListPrice}</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;
//     return newItem;
//   } else {
//     let newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <span data-id="${item.Id}" class="cart-card__remove">X</span>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//     return newItem;
//   }
// }

