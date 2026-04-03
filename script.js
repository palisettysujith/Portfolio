const target = document.getElementById('type-target');
const text = "Mechanical Engineer";
let index = 0;
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}
window.onload = typeEffect;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});