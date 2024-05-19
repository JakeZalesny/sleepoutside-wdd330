import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min + 1)) + min;
}
export function applyDiscount(item) {
    const discount = getRandomFloat(0.1, 0.75);
    item.FinalPrice = Math.floor(item.FinalPrice * discount).toFixed(2);
    setLocalStorage("so-cart", item);
  }

export function applyDiscountAlone(item) {
    const discount = getRandomFloat(0.1, 0.75);
    item.ListPrice = Math.floor(item.ListPrice * discount).toFixed(2);    
    return item.ListPrice;
}

// applyDiscount();
// module.exports = { applyDiscount, getRandomFloat, getRandomInt };