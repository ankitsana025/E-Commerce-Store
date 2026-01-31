function openProduct(name, price, desc, img) {
  localStorage.setItem("product", JSON.stringify({
    name,
    price,
    desc,
    img
  }));
  window.location.href = "product.html";
}

function filterProducts(category) {
  document.querySelectorAll(".product").forEach(p => {
    p.style.display =
      category === "all" || p.classList.contains(category)
      ? "block" : "none";
  });
}

function setActive(btn) {
  document.querySelectorAll(".categories button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}
