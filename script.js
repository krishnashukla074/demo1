// ===== Custom cursor =====
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
(function animateRing(){
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();
document.querySelectorAll('a, button, .card').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width = '54px'; ring.style.height = '54px'; ring.style.opacity = '.6'; });
  el.addEventListener('mouseleave', () => { ring.style.width = '34px'; ring.style.height = '34px'; ring.style.opacity = '1'; });
});

// ===== Nav scroll state + active link =====
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// ===== Theme toggle =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('portfolio-theme', isDark ? 'light' : 'dark');
});

// ===== Typing effect =====
const words = ['the web.', 'real users.', 'humans, not just code.', 'scale.'];
const typedEl = document.getElementById('typed');
let wi = 0, ci = 0, deleting = false;

function type() {
  const word = words[wi];
  typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
  let speed = deleting ? 40 : 80;
  if (!deleting && ci === word.length) { speed = 1400; deleting = true; }
  else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; speed = 300; }
  setTimeout(type, speed);
}
type();

// ===== Scroll reveal =====
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Animated counters =====
const counters = document.querySelectorAll('.stat-num');
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target; return; }
      el.textContent = cur;
      requestAnimationFrame(tick);
    };
    tick();
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterIO.observe(c));

// ===== Tilt effect on project cards =====
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ===== Magnetic buttons =====
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ===== Smooth scroll for in-page links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Confetti burst on "Say hello" click =====
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const colors = ['#6C3CE9', '#FF5D8F', '#00C2A8', '#FFB020'];
let particles = [];
function burstConfetti(x, y) {
  for (let i = 0; i < 60; i++) {
    particles.push({
      x, y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 1.2) * 10,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      life: 100
    });
  }
}
function renderConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.vy += 0.25; p.x += p.vx; p.y += p.vy; p.life--;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(p.life / 100, 0);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  });
  particles = particles.filter(p => p.life > 0);
  requestAnimationFrame(renderConfetti);
}
renderConfetti();

document.getElementById('mailBtn').addEventListener('click', e => {
  const r = e.currentTarget.getBoundingClientRect();
  burstConfetti(r.left + r.width / 2, r.top + r.height / 2);
});
