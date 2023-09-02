document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('section iframe');
    iframes.forEach(function(iframe) {
        iframe.addEventListener('load', function() {
            iframe.classList.add('loaded');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.add('loaded');
    });
});