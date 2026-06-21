
// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".navlist");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
});


// Close menu after clicking link
document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("show");
    });
});


// Active Navbar on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });

});




const text = "•Director • Founder of Sapphire Infotech Solutions";
const typingText = document.querySelector(".hero-content p");

let index = 0;

typingText.innerHTML = "";

function typeEffect() {

    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }

}

typeEffect();


