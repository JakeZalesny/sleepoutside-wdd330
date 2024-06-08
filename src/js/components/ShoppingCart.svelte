<script>
    import { getLocalStorage, setLocalStorage } from "../utils.mjs";
    
    const cartItems = getLocalStorage("so-cart");

    function removeProductFromCart(product) {
  // remove product from cart
  const cart = getLocalStorage("so-cart");
  const newCart = cart.filter((item) => item.Id !== product);
  setLocalStorage("so-cart", newCart);

  location.reload();
}


document.querySelectorAll(".cart-card__remove").forEach((button) => {
  button.addEventListener("click", function (event) {
    const productId = event.target.getAttribute("data-id");
    removeProductFromCart(productId);
  });
});
</script>
<h2>My Cart</h2>

<ul class="product-list">
    {#each cartItems as item}
    <li class="cart-card divider">
        <a href="product_pages/index.html?products={item.Id}" class="cart-card__image">
            <img src="{item.Images.PrimaryMedium}" alt="{item.Name}"/>
        </a>
        <a href="#"><h2 class="card__name">{item.Name}</h2></a>
        <p class="cart-card__color">{item.Colors[0].ColorName}</p>
        <p class="cart-card__quantity">qty: 1</p>
        <span data-id="${item.Id}" class="cart-card__remove">X</span>
        <p class="cart-card__price">${item.FinalPrice}</p>
    </li>
    {/each}        
</ul>