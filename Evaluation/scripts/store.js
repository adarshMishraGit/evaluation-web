let data = JSON.parse(localStorage.getItem("Data")) || [];

let totalCount = document.getElementById("count");
totalCount.innerText = data.length;

let productGrid = document.querySelector("#productGrid");
function createGrid(data) {
  productGrid.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let product = `
    <center>
      <div class="product-card">
        <img class="product-image" src="${data[i].image}" alt="${data[i].name}">
        <div class="product-info">
          <div class="product-brand">${data[i].brand}</div>
          <div class="product-name">${data[i].name}</div>
          <div class="product-price">Rs. ${data[i].price}</div>
          <button class="remove-btn" onclick="removeProduct(${i})">Remove</button>
        </div>
      </div>
      </center>
    `;
    productGrid.innerHTML += product;
  }
}

function removeProduct(index) {
  data.splice(index, 1);
  localStorage.setItem("Data", JSON.stringify(data));
  totalCount.innerText = data.length;
  createGrid(data);
}

createGrid(data);
