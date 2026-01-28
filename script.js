let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

/* CATEGORY FILTER */
function filterProducts(category) {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (category === "all" || product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

/* DARK MODE */
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
});
