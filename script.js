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

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('#home, #about, #myventures, #contact, .sapphire-section, #thalassic');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        // Page var aala ki show add kar
        entry.target.classList.add('show');
      } else {
        // After Page show removed - again animation
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
}); 

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('#home, #about, #myventures, #contact');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
        
        // Section In .section-title show class 
        const title = entry.target.querySelector('.section-title');
        if(title) title.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        
        const title = entry.target.querySelector('.section-title');
        if(title) title.classList.remove('show');
      }
    });
  }, { threshold: 0.3 }); // 30% showing animation start

  sections.forEach(section => observer.observe(section));
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navlist = document.querySelector('.navlist');

menuBtn.addEventListener('click', () => {
  navlist.classList.toggle('active');
});

// Link click on menu off
document.querySelectorAll('.navlist a').forEach(link => {
  link.addEventListener('click', () => {
    navlist.classList.remove('active');
  });
});