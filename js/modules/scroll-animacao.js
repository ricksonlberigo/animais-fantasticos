export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    const windowMetade = window.innerHeight * 0.4;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      const isSectionVisible = sectionTop - windowMetade < 0;

      if (isSectionVisible) section.classList.add('ativo');
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
