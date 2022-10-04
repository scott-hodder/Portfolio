const scrollBtn = document.getElementById("scrollToTop");
const viewWorkBtn = document.getElementById("viewWorkBtn");

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
