// Basic search functionality
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const destinations = document.querySelectorAll('.destination-card');
    destinations.forEach(destination => {
        const title = destination.querySelector('.card-title').textContent.toLowerCase();
        destination.style.display = title.includes(query) ? 'block' : 'none';
    });
});


// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});

