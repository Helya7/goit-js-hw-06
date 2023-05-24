const categoriesListEl = document.querySelector("#categories");
const categoriesItemsEl = categoriesListEl.querySelectorAll(".item");

console.log("Number of categories:", categoriesItemsEl.length);

categoriesItemsEl.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElementsEl = item.querySelectorAll("li").length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElementsEl);
});
