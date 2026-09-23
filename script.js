const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('#site-nav');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav?.classList.toggle('hidden', isOpen);
  siteNav?.classList.toggle('absolute', !isOpen);
  siteNav?.classList.toggle('left-6', !isOpen);
  siteNav?.classList.toggle('right-6', !isOpen);
  siteNav?.classList.toggle('top-20', !isOpen);
  siteNav?.classList.toggle('flex', !isOpen);
  siteNav?.classList.toggle('flex-col', !isOpen);
  siteNav?.classList.toggle('rounded-2xl', !isOpen);
  siteNav?.classList.toggle('border', !isOpen);
  siteNav?.classList.toggle('border-paper/10', !isOpen);
  siteNav?.classList.toggle('bg-[#1a1e1f]', !isOpen);
  siteNav?.classList.toggle('p-6', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

document.querySelectorAll('#site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    siteNav?.classList.add('hidden');
    siteNav?.classList.remove('absolute', 'flex', 'flex-col', 'rounded-2xl', 'border', 'border-paper/10', 'bg-[#1a1e1f]', 'p-6', 'left-6', 'right-6', 'top-20');
    document.body.classList.remove('menu-open');
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thanks! We will be in touch soon.';
  contactForm.reset();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));