
<script>
import { getData } from "../productData.mjs";
import ProductSummary from "./ProductSummary.svelte"

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
