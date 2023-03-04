//Variables
const resultado = document.querySelector('#resultado');

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos();
});

//Funciones
function mostrarAutos() {
  // Recorremos el arreglos de objetos de autos
  autos.forEach((auto) => {
    // Aplicando destructuring

    const { marca, modelo, year, precio, puertas, color, transmision } = auto;

    const autoHTML = document.createElement('P');

    autoHTML.textContent = `${marca} ${modelo} - ${year} - Precio: $${precio} - ${puertas} Puertas - Color: ${color} - Transmision: ${transmision}`;

    // almacenamos en el div resultado los parrafos
    resultado.appendChild(autoHTML);
  });
}
