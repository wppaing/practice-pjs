AOS.init();
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        nav.classList.add("nav-scrolled");
        nav.classList.remove("py-4");
    } else {
        nav.classList.remove("nav-scrolled");
        nav.classList.add("py-4");
    }
});
// navbar decoration
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", function () {
    navToggler.classList.toggle("active");
});
// scroller
let headerOffset = document.querySelector("nav").offsetHeight - 40;
document.querySelectorAll(".scrollto").forEach((e) => {
    e.addEventListener("click", (el) => {
        el.preventDefault();
        let sectionOffset = document.getElementById(
            e.hash.substring(1)
        ).offsetTop;
        window.scrollTo({
            top: sectionOffset - headerOffset,
            behavior: "smooth",
        });
    });
});
// back to top btn
document.querySelector(".back-to-top").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
