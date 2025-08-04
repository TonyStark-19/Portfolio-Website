// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtn2 = document.querySelector('.menu-btn-2');
    const navElements = document.querySelectorAll('.nav-link');

    // when nav element is clicked hide menu box
    navElements.forEach(navLink => {
        navLink.addEventListener("click", function () {
            menu.classList.toggle('active');
            menuBtn2.classList.add('hidden'); // Hide close button
            menuBtn.classList.remove('hidden'); // Show menu button
        })
    });

    // Menu open button click
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.add('hidden'); // Hide menu button
        menuBtn2.classList.remove('hidden'); // Show close button
    });

    // Menu close button click
    menuBtn2.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn2.classList.add('hidden'); // Hide close button
        menuBtn.classList.remove('hidden'); // Show menu button
    });
});

// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// home section
sr.reveal('.main-content', { delay: 50, origin: 'top' });
sr.reveal('.content-image', { delay: 50, origin: 'top' });

// about section
sr.reveal('.title', { delay: 50, origin: 'top' });
sr.reveal('.box-wrap', { delay: 50, origin: 'bottom' });

// skills section
sr.reveal('.topic1', { delay: 50, origin: 'bottom' });
sr.reveal('.tool', { delay: 50, origin: 'bottom' });
sr.reveal('.topic2', { delay: 50, origin: 'bottom' });
sr.reveal('.tech', { delay: 50, origin: 'bottom' });

// projects section
sr.reveal('.project-box-wrap', { delay: 50, origin: 'bottom' });
sr.reveal('.experience-box-wrap', { delay: 50, origin: 'bottom' });

// contact section
sr.reveal('.container', { delay: 50, origin: 'bottom' });