
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");

burger.addEventListener("click", () => {
    burger.classList.toggle("change");
    nav.classList.toggle("show");
});

document.querySelectorAll("nav ul li a").forEach(e => 
    e.addEventListener("click", () => {
        burger.classList.toggle("change");
        nav.classList.toggle("show");
    }))
