
  const items = document.querySelectorAll('.pill-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Remove após aparecer (opcional)
      }
    });
  }, {
    threshold: 0.1 // quando 10% do elemento estiver visível
  });

  // Seleciona todos os títulos de seção
  document.querySelectorAll('.section-title').forEach(el => {
    observer.observe(el);
  });
