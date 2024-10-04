var currentPath = window.location.pathname;

  // Get all the navbar links
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Loop through links and apply the 'active' class to the matching path
navLinks.forEach(function(link) {
    if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
    }
});