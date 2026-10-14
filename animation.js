document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.carrusel-item'));
  const prevBtn = document.querySelector('.carrusel-prev');
  const nextBtn = document.querySelector('.carrusel-next');
  const container = document.querySelector('.carrusel');

  console.log('carousel init -> slides:', slides.length, 'prevBtn:', !!prevBtn, 'nextBtn:', !!nextBtn, 'container:', !!container);

  if (!slides.length) {
    console.warn('No se encontraron slides (.carrusel-item). Revisa clases y el HTML.');
    return;
  }

  let current = 0;
  const AUTOPLAY_MS = 3500; // cambia a lo que quieras
  let autoplayTimer = null;

  function showSlide(index) {
    index = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    current = index;
  }

  function next() {
    showSlide(current + 1);
  }

  function prev() {
    showSlide(current - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      next();
      resetAutoplay();
    });
  } else {
    console.warn('.carrusel-next no encontrado.');
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prev();
      resetAutoplay();
    });
  } else {
    console.warn('.carrusel-prev no encontrado.');
  }

  function startAutoplay() {
    stopAutoplay();
    if (AUTOPLAY_MS > 0 && slides.length > 1) {
      autoplayTimer = setInterval(() => next(), AUTOPLAY_MS);
    }
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pausa al hover y focus para accesibilidad
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
    container.addEventListener('focusin', stopAutoplay);
    container.addEventListener('focusout', startAutoplay);
    // permitir control por teclado
    container.tabIndex = 0;
    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { prev(); resetAutoplay(); }
      if (e.key === 'ArrowRight') { next(); resetAutoplay(); }
    });
  } else {
    console.warn('.carrusel (contenedor) no encontrado; no se aplicará pausa al hover.');
  }

  // Inicializar
  showSlide(current);
  startAutoplay();
});



document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carrusel-item').forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;
    item.style.backgroundImage = `url("${img.src}")`;
    item.style.backgroundSize = 'cover';
    item.style.backgroundPosition = 'center'; // o 'center 30%'
    item.style.backgroundRepeat = 'no-repeat';
    // opcional: mantener elemento img para accesibilidad pero oculto visualmente
    img.style.opacity = '0';
    img.style.position = 'absolute';
    img.style.inset = '0';
  });
});