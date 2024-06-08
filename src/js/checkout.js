import { renderHeaderFooter } from "./utils.mjs";
import CheckoutForm from "../js/components/CheckoutForm.svelte";

renderHeaderFooter();

new CheckoutForm({
    target: document.querySelector(".checkout"),
    props: {key: "so-cart"},
});
