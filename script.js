const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__nav");

if (menuBtn) {
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
});
}
