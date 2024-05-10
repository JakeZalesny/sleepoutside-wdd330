const description = document.querySelector(".product__description");
const color = document.querySelector(".product__color");
const price = document.querySelector(".product-card__price");
const image = document.querySelector("#product-image");
const name = document.querySelector(".product__name");
const company = document.querySelector(".product__company");
const title = document.querySelector("title");


// Will need to add another js file to create event listeners on main index page
// These will run the function below

export function renderProduct(product) {
    title.innerHTML = `Sleep Outside | ${product.Name}`
    description.innerHTML = product.DescriptionHtmlSimple;
    color.textContent = `${product.Colors[0]["colorName"]}/${product.Colors[1]["colorName"]}`;
    price.textContent = `$${product.Price}`;
    image.src = product.Image;
    image.alt = product.NameWithoutBrand;
    name.textContent = product.NameWithoutBrand;
    company.textsContent = product.Brand.Name;

}


