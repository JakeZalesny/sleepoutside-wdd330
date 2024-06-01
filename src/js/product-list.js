import ProductList from "../js/components/ProductList.svelte";
import { renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();

var currentUrl = window.location.href;

// Parse the URL
var url = new URL(currentUrl);

// Get the query parameters
var params = new URLSearchParams(url.search);

// Extract the value of the 'type' parameter
var typeValue = params.get('type');

new ProductList({
    target: document.querySelector(".products"),
    props: { category: typeValue },
  });

  