const menuDomId = document.querySelector(".menu");
const navDomId = document.querySelector(".navigation");
const infoLink = document.querySelectorAll(".service-info__link");
const linkLine = document.querySelectorAll(".link-container");

// Menu toggle
menuDomId.addEventListener("click", () => {
    navDomId.classList.toggle("show-nav");
})

// Hover states for links "learn more"
infoLink[0].addEventListener("mouseenter", () => {
    linkLine[0].classList.add("link-container--yellow--active");
});

infoLink[0].addEventListener("mouseleave", () => {
    linkLine[0].classList.remove("link-container--yellow--active");
});

infoLink[1].addEventListener("mouseenter", () => {
    linkLine[1].classList.add("link-container--red--active");
});

infoLink[1].addEventListener("mouseleave", () => {
    linkLine[1].classList.remove("link-container--red--active");
});