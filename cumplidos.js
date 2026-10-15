document.addEventListener("DOMContentLoaded", () => {
  const cumplidos = [
    "🥇 ¡Eres la mejor compañera de juegos del server!",
    "✨ Tienes los mejores gustos y la personalidad más genial.",
    "🐱 ¡Hoy tienes +100 de suerte y bendición de gatitos!",
    "🍕 Vale por una salida a comer lo que tú quieras por tu cumple.",
    "💖 Gracias por existir y por aguantar mis dramas diarios.",
    "🏆 Si la amistad fuera un videojuego, tú ya tendrías el rango Platino.",
    "🌟 Eres esa persona que le alegra el día a cualquiera con un meme.",
    "🛸 ¡Eres de otro planeta! Nunca cambies esa forma de ser."
  ];

  const boton = document.getElementById('boton-cumplido');
  const texto = document.getElementById('texto-cumplido');
  const tarjeta = document.querySelector('.tarjeta-cumplido');

  // Validamos que los elementos existan en la página antes de activarlos
  if (boton && texto && tarjeta) {
    boton.addEventListener('click', () => {
      tarjeta.style.transform = "scale(0.95)";
      
      setTimeout(() => {
        const indiceAleatorio = Math.floor(Math.random() * cumplidos.length);
        texto.innerText = cumplidos[indiceAleatorio];
        tarjeta.style.transform = "scale(1)";
      }, 100);
    });
  } else {
    console.error("No se encontraron los elementos del generador de cumplidos en el HTML.");
  }
});