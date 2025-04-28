window.location.href = "https://rahulio.dev";

const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav ul");

burger.addEventListener("click", () => {
    burger.classList.toggle("change");
    nav.classList.toggle("show");
});

document.querySelectorAll("header nav ul li a").forEach(e => 
    e.addEventListener("click", () => {
        burger.classList.toggle("change");
        nav.classList.toggle("show");
}));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-anim');
        } else {
            entry.target.classList.remove('show-anim');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-anim");
hiddenElements.forEach((element) => observer.observe(element));
