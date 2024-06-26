import { findProductById } from "./externalServices.mjs";
import { cartCount } from "./stores.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let product = {}; 

export async function productDetails(id, selector) {
    product = await findProductById(id);
    console.log(product)

    const el = document.querySelector(selector);
    el.insertAdjacentHTML("afterbegin", renderProductDetails(product));
    document.getElementById("addToCart").addEventListener("click", addToCartHandler);
    document.getElementById("addToWishList").addEventListener("click", addToWishListHandler);
}
function addToCart() {
    let cartContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
    // then add the current product to the list
    cartContents.push(product);
    setLocalStorage("so-cart", cartContents);
    // update the visible cartCount
    cartCount.set(cartContents.length);
  }

  async function addToCartHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addToCart(product);
  }

  function addToWishList() {
    let wishList = getLocalStorage("so-wishlist");
    if (!wishList) {
      wishList = [];
    }
    wishList.push(product);
    setLocalStorage("so-wishlist", wishList); 

    // update the visible wishlistCount
    wishlistCount.set(wishList.length);
  }

  async function addToWishListHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addToWishList(product);
  }

  function renderProductDetails(product) {
    return `<h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.Name}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
    <div class="product-detail__wishlist">
      <button id="addToWishList" data-id="${product.Id}">Add to Wish List</button>
    </div>`;
  }