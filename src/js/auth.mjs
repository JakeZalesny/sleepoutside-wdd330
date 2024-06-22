import { loginRequest } from "./externalServices.mjs";
import {getLocalStorage, setLocalStorage } from "./utils.mjs";
// import { jwt_decode } from "jwt-decode";

const tokenKey = "so-token";

export async function login(creds, redirect = "/") {
  console.log("login");
  try {
    const token = await loginRequest(creds);
    setLocalStorage(tokenKey, token);
    // because of the default arg provided above...if no redirect is provided send them Home.
    window.location = redirect;
  } catch (err) {
    console.log(err)
  }
}

function isTokenValid(token) {
  console.log("isTokenValid");
  if (token) {
    const decoded = token;
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.log("Token Expired");
      return false;
    } else {
      console.log("Token Valid");
      return true;
    }
  }
}

export function checklogin() {
  console.log("checklogin");
  const token = getLocalStorage(tokenKey);
  console.log(token);
  let location = window.location;
  // let isValid = isTokenValid(token);
  const isValid = true; 

  if (!isValid) {
    localStorage.removeItem(tokenKey);
    console.log("Invalid Token");

    window.location = `/login/index.html?redirect=${location.pathname}`;
  } else return token;


}
