import ProductList from "./components/ProductList.svelte";

new ProductList({
  target: document.querySelector(".products"),
  props: { category: "tents" },
});

// modal for first visit
if (!localStorage.getItem("firstVisit")) {
  var firstVisit = new Date().toISOString();
  localStorage.setItem("firstVisit", firstVisit);

  var modal = document.querySelector("#modal");
  modal.style.display = "block";

  var closeButton = document.querySelector(".close");

  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}
