<script>
    import { getLocalStorage } from "../utils.mjs";
    import { checkout } from "../externalServices.mjs";

    export let key = ""; 
    let tax = 0.06;
    let total = 0;
    let shipping = 10; 
    let count = 0;
    let orderTotal = 0;
    let cartItems = []

    const init = () => {
        cartItems = getLocalStorage("so-cart");
        calculateSummary();
    }

    const calculateSummary = () => {
        cartItems.forEach((item) => {
            total += item.FinalPrice;
        });    
    }



    const calculateOrderTotal = () => {
        shipping = 10 + (cartItems.length -1) *2;
        tax = (total * tax).toFixed(2);
        orderTotal = (parseFloat(total) + parseFloat(tax) + parseFloat(shipping)).toFixed(2);
    }

    const formatItems = () => {
        const formated = cartItems.map((item) => {
            return {
                id: item.Id,
                price: item.FinalPrice,
                name: item.Name,
                quantity: 1, 
            };
        });
        return formated; 
    }

    const submit = async () => {
        const json = formDataToJSON(this);
        json.orderDate = new Date();
        json.orderTotal = orderTotal;
        json.tax = tax;
        json.shipping = shipping;
        json.items = formatItems();
        console.log(json);
        try {
            const res = await checkout(json);
            console.log(res);

        } catch (err) {
            console.log(err);
        }
         
    }

    init();

</script>
<form name="checkout" on:submit|preventDefault={submit}>
    <fieldset>
        <legend>Personal Information</legend>
        <div class="checkout__name">
            <label for="fname">First Name: </label>
            <input type="text" id="fname" required>
            <label for="lname">Last Name: </label>
            <input type="text" id="lname" required>
        </div>
        <div class="checkout__address">
            <label for="street">Street Address: </label>
            <input type="text" id="street" required>
            <label for="city">City: </label>
            <input type="text" id="city" required>
            <label for="state">State: </label>
            <input type="text" id="state" required>
            <label for="zip">Zip: </label>
            <input type="text" name="Zip" id="zip" on:blur={calculateOrderTotal} required>
        </div>
    </fieldset>
    <fieldset>
        <legend>Payment Information</legend>
    <input type="text" id="zip">
        <label for="cardNumber">Card Number: </label>
        <input type="text" id="cardNumber"
        maxlength="16"
        minlength="16"
        required
        placeholder="XXXX-XXXX-XXXX-XXXX">
        <label for="expiration">Expiration Date: </label>
        <input type="text" id="expiration" 
        maxlength="5"
        minlength="5"
        placeholder="MM/YY"
        required>
        <label for="code">Security Code: </label>
        <input type="text" id="code"
        maxlength="3"
        minlength="3"
        placeholder="XXX"
        required>
        <input type="submit" value="Checkout" />
    </fieldset>
    <fieldset class="checkout-summary">
        <legend>Order Summary: </legend>
        <ul>
            <li>
                <label for="cartTotal">Item SubTotal({cartItems.length})</label>
                <p name="cartTotal" id="cartTotal">${total}</p>
            </li>
            <li>
                <label for="shipping">Shipping Estimate</label>
                <p name="shipping" id="shipping">${shipping}</p>
            </li>
            <li>
                <label for="tax">Tax</label>
                <p name="tax" id="tax">${tax}</p>
            </li>
            <li>
                <label for="orderTotal">Order Total</label>
                <p name="orderTotal" id="orderTotal">${orderTotal}</p>
            </li>
        </ul>
    </fieldset>
    <button type="submit">Checkout</button>
</form>