import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";
import { renderHeaderFooter } from "./utils.mjs";
import { productDetails } from "./productDetails.mjs";

renderHeaderFooter();

// add to cart button event handler

var currentUrl = window.location.href;

// Parse the URL
var url = new URL(currentUrl);

// Get the query parameters
var params = new URLSearchParams(url.search);

// Extract the value of the 'type' parameter
var typeValue = params.get('type');
productDetails(typeValue, ".product-detail")
