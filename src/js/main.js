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

// const products = await fetch("../json/products.json").then(products => products.json());

// // listeners for dynamic products;
// const northfaceTalusButton = document.getElementById("northface-talus");
// const cedarRidgeButton = document.getElementById("cedar-ridge");
// const marmotButton = document.getElementById("marmot-ajax");
// const northfaceAlpineButton = document.getElementById("northface-alpine");

// northfaceTalusButton.addEventListener("click", () => {
//   console.log(products[1]);
//   renderProduct(products[1]);
  
// });

// cedarRidgeButton.addEventListener("click", () => {
//   renderProduct(products[5]);
// });

// marmotButton.addEventListener("click", () => {
//   renderProduct(products[0]);
// });

// northfaceAlpineButton.addEventListener("click", () => {
//   renderProduct(products[3]);
// });
