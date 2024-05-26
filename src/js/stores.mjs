import { writable } from "svelte/store";
import { renderCartCount } from "./superText.mjs";

export const cartCount = writable(renderCartCount());