// import jwt_decode  from "jwt-decode";
import { login } from "./auth.mjs";
import { renderHeaderFooter, getParam } from "./utils.mjs";
// import loginForm from "../js/components/LoginForm.svelte";

renderHeaderFooter();

const redirect = getParam("redirect");

document.querySelector("#loginButton").addEventListener("click", (e) => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  login({ username, password }, redirect);
});

// new loginForm({
//   target: document.querySelector(".login-form"),
// });
