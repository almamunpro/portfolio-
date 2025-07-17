// JavaScript (optional if using nav toggler)
document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
});
// typing animation
var typed = new Typed(".typing",{
    strings:["","Web Designer and Developer", "Graphic Designer", "Mobile App Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})