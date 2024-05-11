const description = document.querySelector(".product__description");
const color = document.querySelector(".product__color");
const price = document.querySelector(".product-card__price");
const image = document.querySelector("#product-image");
const name = document.querySelector("#product__name");
const company = document.querySelector(".product__company");
const title = document.querySelector("title");



const response = await fetch('../json/tents.json');
const products = await response.json();
// Will need to add another js file to create event listeners on main index page
// These will run the function below

function getUrlParams() {
    var searchParams = new URLSearchParams(window.location.search);
    var params = {};
    for (var [key, value] of searchParams.entries()) {
        params[key] = value;
    }
    // console.log(params);
    return params;
}

function populateContent() {
    var params = getUrlParams();
    var type = params["type"];
    return type;

}

function renderProduct(product) {
    title.innerHTML = `Sleep Outside | ${product.Name}`
    company.textContent = product.Brand.Name;
    name.textContent = product.NameWithoutBrand;
    description.innerHTML = product.DescriptionHtmlSimple;
    color.textContent = `${product.Colors[0].ColorName}`;
    price.textContent = `$${product.FinalPrice}`;
    image.src = product.Image;
    image.alt = product.NameWithoutBrand;
    company.textsContent = product.Brand.Name;

}

const type = populateContent();

switch (type) {
    case "ajax":
            renderProduct(products[0]);   
        break;
    case "talus":
        renderProduct(products[1]);   
        break; 
    case "cedar-ridge":
        renderProduct(products[5]);
        break;
    case "alpine":
        renderProduct(products[3]);
        break; 
}


