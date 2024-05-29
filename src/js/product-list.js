import ProductList from "../js/components/ProductList.svelte";

new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
  });

  