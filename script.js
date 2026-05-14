// ── SET PROFILE PHOTO ──
// Replace 'your-photo.jpg' with your actual image filename
// Make sure the photo is in the SAME folder as index.html
const photo = document.getElementById('profilePhoto');
photo.src = 'photo.jpeg';

// ── SCROLL REVEAL ANIMATION ──
// Animates sections into view as the user scrolls down
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));