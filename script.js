const tabs = document.querySelectorAll(".segmented button");
const productCards = document.querySelectorAll(".product-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
  });
});

productCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    productCards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
  });
});
