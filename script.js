// Splash Logo → Show Main Page
window.onload = function () {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000);
};
// PRODUCT DATA
const products = [
  { name: "Wireless Earbuds", price: 999, image: "images/airpod.jpg" },
  { name: "Smart Watch", price: 1499, image: "images/watch.jpg" },
  { name: "Shirts", price: 399, image: "images/shirt.jpg" },
  { name: "One Plus", price: 19000, image: "images/mobile.jpg" },
  {
    name: "Samsung Tv",
    price: 50000,
    image: "images/tv.jpg"
  }
];

// Render Products
function displayProducts(filtered = products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button class="add-cart" onclick='addToCart("${product.name}", ${product.price})'>Add to Cart</button>
    `;
    container.appendChild(card);
  });
}
displayProducts();

// Add to Cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`"${name}" added to cart!`);
}

// Search Function
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});
window.onload = function () {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2500); // 2.5 seconds
};

