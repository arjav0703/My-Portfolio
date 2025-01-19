document.addEventListener('DOMContentLoaded', function() {
    const mobileButton = document.querySelector('.mobile-button');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileButton.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
});