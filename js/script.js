document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Fecha o menu mobile após clicar em uma seção.
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navContent");
      if (menu && menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Animação discreta de entrada dos cartões quando aparecem na tela.
  const cards = document.querySelectorAll(".skill-card, .education-card, .timeline-content");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    cards.forEach((card) => {
      card.classList.add("reveal");
      observer.observe(card);
    });
  }
});
