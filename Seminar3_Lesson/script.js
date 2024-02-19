document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const href = this.getAttribute('href'); 

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        });
    });
});

