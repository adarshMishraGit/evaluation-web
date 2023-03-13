const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const brand = document.querySelector("#brand").value.trim();
  const name = document.querySelector("#name").value.trim();
  const price = document.querySelector("#price").value.trim();
  const image = document.querySelector("#image").value.trim();

  if (!brand || !name || !price || !image) {
    alert("Please fill all the details");
    return;
  }

  const product = {
    brand,
    name,
    price,
    image,
  };

  let products = localStorage.getItem("Data");
  if (!products) {
    products = [];
  } else {
    products = JSON.parse(products);
  }

  products.push(product);

  localStorage.setItem("Data", JSON.stringify(products));

  form.reset();

  location.href = "./store.html";
});
