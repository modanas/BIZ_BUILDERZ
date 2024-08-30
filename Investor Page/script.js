// Example: Adding a hover effect to navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#f0f0f0';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
    });
});
