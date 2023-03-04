//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); //año actual
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
};

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(); //muestra los automoviles al cargar

  // LLena las opciones de años
  llenarSelect();
});

// Event listener para los select de búqueda
marca.addEventListener('change', (evento) => {
  datosBusqueda.marca = evento.target.value;

  console.log(datosBusqueda);
});
// Event listener para los select de búqueda
year.addEventListener('change', (evento) => {
  datosBusqueda.year = evento.target.value;

  console.log(datosBusqueda);
});
// Event listener para los select de búqueda
minimo.addEventListener('change', (evento) => {
  datosBusqueda.minimo = evento.target.value;

  console.log(datosBusqueda);
});
// Event listener para los select de búqueda
maximo.addEventListener('change', (evento) => {
  datosBusqueda.maximo = evento.target.value;

  console.log(datosBusqueda);
});
// Event listener para los select de búqueda
puertas.addEventListener('change', (evento) => {
  datosBusqueda.puertas = evento.target.value;

  console.log(datosBusqueda);
});
// Event listener para los select de búqueda
transmision.addEventListener('change', (evento) => {
  datosBusqueda.transmision = evento.target.value;

  console.log(datosBusqueda);
});
// Event listener para los select de búqueda
color.addEventListener('change', (evento) => {
  datosBusqueda.color = evento.target.value;

  console.log(datosBusqueda);
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
