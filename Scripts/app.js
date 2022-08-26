const menuBar = document.querySelector(".menu-bars");
const sideMenu = document.querySelector(".side-menu");
const sideMenuList = document.querySelector(".side-menu-list");
const closeBtn = document.getElementById("close-btn");
const companyLogo = document.querySelector(".company-logo");
const listItems = document.querySelectorAll(".side-menu-list li");
console.log(listItems);
menuBar.addEventListener("click", () => {
  sideMenu.classList.add("visible");
  sideMenuList.style.minHeight = "300px";
});
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("visible");
});
companyLogo.addEventListener("click", () => {
  sideMenu.classList.add("visible");
});

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", () => {
    sideMenu.classList.remove("visible");
  });
}

// var slider = tns({
//   container: ".banner-section",
//   items: 1,
//   slideBy: "page",
//   autoplay: true,
//   controlsContainer: ".customized__controls",
//   prevButton: ".review__prev__icon",
//   nextButton: ".review__next__icon",
//   speed: 1000,
// });
// tns();
