document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.querySelector('[data-year]');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const header = document.querySelector('header');
  const updateFloatingCtas = () => {
    if (!header) return;
    document.body.classList.toggle('scrolled', window.scrollY > header.offsetHeight + 12);
  };

  updateFloatingCtas();
  window.addEventListener('scroll', updateFloatingCtas, { passive: true });

  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }
});
