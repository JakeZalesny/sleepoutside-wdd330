const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getData(category = "tents") {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(baseURL + "checkout/", options);
  const data = await convertToJson(response);
  return data;
}

export async function loginRequest(creds) {
  console.log(creds);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  };
  const response = await fetch(baseURL + "login/", options).then(convertToJson);
  console.log(response);
  return response.accessToken;
}

export async function orders(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "orders", options).then(convertToJson);
  return response;
}
