// ============================================
// Tulsi Chokshi — Personal Site Scripts
// ============================================

// --- Sticky nav border on scroll ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
  });
});

// --- Scroll-triggered fade-in animations ---
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in to sections
document.querySelectorAll(
  '.story-block, .story-stats, .cred-card, .fl-content, .fl-card, .insight-card, .newsletter, .footer-content'
).forEach(el => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});

// --- Smooth scroll for anchor links (fallback) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
