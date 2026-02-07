/* ============================================

   TIER A MVP - MAIN JAVASCRIPT

   Handles animations, scroll reveals, and music

============================================ */

// ============================================
// LOADING SCREEN
// ============================================

window.addEventListener('load', () => {

    setTimeout(() => {

        const loadingScreen = document.getElementById('loading-screen');

        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }

        setTimeout(() => {
            revealSection(0);
        }, 400);

    }, 2000);

});

// ============================================
// SECTION REVEAL ON SCROLL
// ============================================

const sections = document.querySelectorAll('section');

function revealSection(index) {
    if (sections[index]) {
        sections[index].classList.add('visible');
    }
}

const observerOptions = {
    root: null,
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ============================================
// MUSIC TOGGLE
// ============================================

let musicPlaying = false;

const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

if (musicToggle && bgMusic) {

    musicToggle.addEventListener('click', () => {

        if (musicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🔇';
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(() => { });
            musicToggle.textContent = '🎵';
            musicToggle.classList.add('playing');
        }

        musicPlaying = !musicPlaying;

    });

}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    });

});

// ============================================
// NAME LETTER ANIMATION
// ============================================

function animateName() {

    const nameElement = document.querySelector('.name');
    if (!nameElement) return;

    const originalText = nameElement.textContent;

    nameElement.textContent = '';
    nameElement.style.opacity = '1';

    let index = 0;

    const interval = setInterval(() => {

        if (index < originalText.length) {
            nameElement.textContent += originalText[index];
            index++;
        } else {
            clearInterval(interval);
        }

    }, 100);

}

const welcomeSection = document.getElementById('welcome');

if (welcomeSection) {

    const nameObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                setTimeout(animateName, 500);
                nameObserver.disconnect();
            }

        });

    }, { threshold: 0.5 });

    nameObserver.observe(welcomeSection);

}

// ============================================
// PHOTO TILT EFFECT
// ============================================

const photoFrame = document.querySelector('.photo-frame');

if (photoFrame) {

    photoFrame.addEventListener('mousemove', (e) => {

        const rect = photoFrame.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        photoFrame.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    photoFrame.addEventListener('mouseleave', () => {
        photoFrame.style.transform = 'rotate(-2deg)';
    });

}

// ============================================
// CTA BUTTON ANIMATION
// ============================================

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {

    ctaButton.addEventListener('click', () => {

        ctaButton.style.transform = 'scale(0.95)';

        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 200);

    });

}

// ============================================
// MOBILE VIEWPORT FIX
// ============================================

function setVH() {

    const vh = window.innerHeight * 0.01;

    document.documentElement
        .style.setProperty('--vh', `${vh}px`);

}

setVH();
window.addEventListener('resize', setVH);

// ============================================
// ANALYTICS HELPER
// ============================================

const questionSection = document.getElementById('question');

if (questionSection) {

    const analyticsObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                console.log('User reached the question section');
                analyticsObserver.disconnect();

            }

        });

    }, { threshold: 0.7 });

    analyticsObserver.observe(questionSection);

}

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log(
    '%c💌 Made with love 💌',
    'font-size: 20px; color: #ff6b9d; font-weight: bold;'
);

console.log(
    '%cCurious how this was built? Visit our site!',
    'font-size: 14px; color: #b8b8b8;'
);
