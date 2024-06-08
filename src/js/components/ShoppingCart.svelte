<script>
  import { getLocalStorage, setLocalStorage } from "../utils.mjs";
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  // Initialize the cart store
  const cart = writable([]);

  // Load cart from local storage on mount
  onMount(() => {
    const storedCart = getLocalStorage('so-cart');
    cart.set(storedCart);
  });

  // Function to remove product from cart
  function removeProductFromCart(productId) {
    cart.update(currentCart => {
      const newCart = currentCart.filter(item => item.Id !== productId);
      setLocalStorage('so-cart', newCart);
      return newCart;
    });
  }
</script>

<h2>My Cart</h2>

<ul class="product-list">
  {#each $cart as item}
    <li class="cart-card divider">
      <a href="product_pages/index.html?products={item.Id}" class="cart-card__image">
        <img src="{item.Images.PrimaryMedium}" alt="{item.Name}"/>
      </a>
      <a href="../product_pages/index.html?products={item.Id}">
        <h2 class="card__name">{item.Name}</h2>
      </a>
      <p class="cart-card__color">{item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <button data-id={item.Id} class="cart-card__remove" type="button" on:click={() => removeProductFromCart(item.Id)}>X</button>
      <p class="cart-card__price">${item.FinalPrice}</p>
    </li>
  {/each}        
</ul>

<style>
  .cart-card__remove {
    background: none;
    border: none;
    color: #a0a0a0;
  }

  .cart-card__remove:hover {
    cursor: pointer;
    color: red;
  }
</style>
