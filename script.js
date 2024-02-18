document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:"smooth"
    });
  });
});
document.getElementById('menuToggle').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav_links');
  navLinks.classList.toggle('active');
});
