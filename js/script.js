// JavaScript (optional if using nav toggler)
document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
});
// typing animation
var typed = new Typed(".typing",{
    strings:["","Web Designer and Developer", "Graphic Designer", "Mobile App Developer"],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})

// nav
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  function updateActiveLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150; // Adjust for fixed nav height
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});
