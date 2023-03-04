//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); //año actual
const min = max - 10;

console.log(max);
console.log(min);

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(); //muestra los automoviles al cargar

  // LLena las opciones de años
  llenarSelect();
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

// Genera los años del select
function llenarSelect() {
  console.log('llenando el select');

  // mostrar los años de actual hacia atras
  for (let i = max; i >= min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option); //agrega las opcion del año al select
  }
}
