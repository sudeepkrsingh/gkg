window.addEventListener('scroll', function () {
    if (window.scrollY > 0) { /* adjust the value (50) to your preference */
        document.querySelector('.logo').style.display = 'none';
    } else {
        document.querySelector('.logo').style.display = 'block';
    }
});


var links = document.querySelectorAll('a[href^="#"]');
links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            var targetPosition = target.offsetTop - 100; // subtract 100 to account for fixed header
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


