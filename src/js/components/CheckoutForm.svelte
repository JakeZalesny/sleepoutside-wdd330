<script>
    import { getLocalStorage } from "../utils.mjs";
    let tax = 0;
    const cartItems = getLocalStorage("so-cart");
    console.log(cartItems); 
</script>


<fieldset class="checkout-summary">
    <legend>Order Summary: </legend>
    <p>${tax}</p>
</fieldset>