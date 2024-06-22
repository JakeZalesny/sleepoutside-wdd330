import jwt_decode from "jwt-decode";
import { loginRequest } from "./externalServices.mjs";
import { alertMessage, getLocalStorage, setLocalStorage } from "./utils.mjs";

const tokenKey = "so-token";

export async function login(creds, redirect = "/") {
  try {
    const token = await loginRequest(creds);
    setLocalStorage(tokenKey, token);
    // because of the default arg provided above...if no redirect is provided send them Home.
    window.location = redirect;
  } catch (err) {
    alertMessage(err.message.message);
  }
}

function isTokenValid(token) {
  console.log("isTokenValid");
  if (token) {
    const decoded = jwt_decode(token);
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

function checklogin() {
  console.log("checklogin");
  const token = getLocalStorage(tokenKey);
  const isValid = isTokenValid(token);

  if (!isValid) {
    localStorage.removeItem(tokenKey);
    console.log("Invalid Token");

    window.location = "/login/index.html?redirect=" + window.location.pathname;
  } else return token;
}
