// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('a.nav-scroll').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Đóng mobile nav nếu đang mở
      mobileNav?.classList.remove('open');
      hamburger?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Thêm scroll-margin-top cho tất cả các section target để bù header
['#recipes', '#stories', '#about'].forEach(id => {
  const el = document.querySelector(id);
  if (el) el.style.scrollMarginTop = (document.querySelector('.site-header')?.offsetHeight || 70) + 12 + 'px';
});

// Category pills active state
document.querySelectorAll('.cat-pill').forEach(pill => {
  pill.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.post-card, .post-card-big, .post-card-side, .about-block, .popular-block, .collections-block, .col-item, .story-card--featured, .story-card-mini, .recipe-big-card, .recipe-sm-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
// Lab Modal
const openLabBtn = document.getElementById('openLabModal');
const closeLabBtn = document.getElementById('closeLabModal');
const labModal = document.getElementById('labModal');

openLabBtn?.addEventListener('click', () => {
  labModal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeLabBtn?.addEventListener('click', () => {
  labModal.classList.remove('open');
  document.body.style.overflow = '';
});

labModal?.addEventListener('click', (e) => {
  if (e.target === labModal) {
    labModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && labModal?.classList.contains('open')) {
    labModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});