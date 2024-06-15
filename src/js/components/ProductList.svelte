
<script>
import { getData } from "../externalServices.mjs";
import ProductSummary from "./ProductSummary.svelte"
import { getLocalStorage, setLocalStorage} from "../utils.mjs";
// import { applyDiscount } from "../discounts.mjs";

export let category;

let promise = getData(category);


</script>

<h2>Top products: {category}</h2>
{#await promise}
  Loading
{:then products}

    <ul class="product-list">
        {#each products.slice(0,4) as product}
            <li class="product-card"><ProductSummary {product} /></li>
        {/each}
    </ul>
{/await} 
