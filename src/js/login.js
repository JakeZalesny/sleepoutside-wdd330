import { renderHeaderFooter } from "./utils.mjs";
import loginForm from "../js/components/LoginForm.svelte";

renderHeaderFooter();

new loginForm({
  target: document.querySelector(".login-form"),
});
