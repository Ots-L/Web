
const cuadrados = document.querySelectorAll(".rueda-cuadrado");

const radio = 120;
const cantidad = cuadrados.length;
const intervalo = 2000;
const duracion = 1500;

// Comenzar desde un costado en lugar de arriba
let anguloInicial = 0;

function colocarCuadrados() {
    cuadrados.forEach((cuadrado, indice) => {
        // Invertir el sentido de las posiciones
        const angulo =
            anguloInicial - (indice * 2 * Math.PI / cantidad);

        const x = Math.cos(angulo) * radio;
        const y = Math.sin(angulo) * radio;

        cuadrado.style.left = `calc(50% + ${x}px)`;
        cuadrado.style.top = `calc(50% + ${y}px)`;

        // Destacar el cuadrado del costado izquierdo
        const izquierda = x < -radio * 0.85;

        cuadrado.classList.toggle("destacado", izquierda);
    });
}

// Transición suave
cuadrados.forEach(cuadrado => {
    cuadrado.style.transition = `
        left ${duracion}ms ease-in-out,
        top ${duracion}ms ease-in-out,
        transform 0.4s ease,
        box-shadow 0.4s ease
    `;
});

colocarCuadrados();

// Desplazar las posiciones en sentido inverso
setInterval(() => {
    anguloInicial -= (2 * Math.PI / cantidad);
    colocarCuadrados();
}, intervalo);

cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener("click", () => {
        // Cerrar los demás cuadrados
        cuadrados.forEach(otro => {
            if (otro !== cuadrado) {
                otro.classList.remove("activo");
            }
        });

        // Agrandar o reducir el cuadrado seleccionado
        cuadrado.classList.toggle("activo");
    });
});
