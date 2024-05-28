import { getLocalStorage } from "./utils.mjs";
export function renderCartCount() {
  const number = getLocalStorage("so-cart")?.length ?? 0;
  return number;   
}

