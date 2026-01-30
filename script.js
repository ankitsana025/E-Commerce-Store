let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function filterProducts(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    product.style.display =
      category === "all" || product.classList.contains(category)
      ? "block" : "none";
  });
}

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
