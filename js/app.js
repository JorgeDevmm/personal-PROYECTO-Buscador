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
  mostrarAutos(autos); //muestra los automoviles al cargar

  // LLena las opciones de años
  llenarSelect();
});

// Event listener para los select de búqueda
marca.addEventListener('change', (evento) => {
  datosBusqueda.marca = evento.target.value;

  filtrarAuto();
});
// Event listener para los select de búqueda
year.addEventListener('change', (evento) => {
  datosBusqueda.year = parseInt(evento.target.value);

  filtrarAuto();
});
// Event listener para los select de búqueda
minimo.addEventListener('change', (evento) => {
  datosBusqueda.minimo = evento.target.value;

  filtrarAuto();
});
// Event listener para los select de búqueda
maximo.addEventListener('change', (evento) => {
  datosBusqueda.maximo = evento.target.value;

  filtrarAuto();
});
// Event listener para los select de búqueda
puertas.addEventListener('change', (evento) => {
  datosBusqueda.puertas = parseInt(evento.target.value);

  filtrarAuto();
});
// Event listener para los select de búqueda
transmision.addEventListener('change', (evento) => {
  datosBusqueda.transmision = evento.target.value;

  filtrarAuto();
});
// Event listener para los select de búqueda
color.addEventListener('change', (evento) => {
  datosBusqueda.color = evento.target.value;

  filtrarAuto();
});

//Funciones
function mostrarAutos(autos) {
  limpiarHTML(); //Elimina el html previo

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

// Limpiar contenido del HTML
function limpiarHTML() {
  // si encuentra un primerhijo elemento
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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

// Función que filtra en base a la búsqueda
function filtrarAuto() {
  // devuelve un nuevo arreglo iterado del objeto actual
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtroPuertas)
    .filter(filtroPTransmision)
    .filter(filtroColor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarHTML();

  const noResultado = document.createElement('DIV');

  noResultado.classList.add('alerta', 'error');
  noResultado.textContent =
    'No hay resultado, Intenta con otros términos de búsqueda';

  resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;

  // Si hay un valor en los datosBusqueda de marca
  if (marca) {
    // devuelve la marca del objeto datosBusqueda que coincida con los objetos de auto
    return auto.marca == marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;

  if (year) {
    return auto.year === year; //convertimos a entero
  }
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;

  if (minimo) {
    return auto.precio >= minimo; //vprecio >= al minimo
  }
  return auto;
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;

  if (maximo) {
    return auto.precio <= maximo; //vprecio >= al minimo
  }
  return auto;
}

function filtroPuertas(auto) {
  const { puertas } = datosBusqueda;

  if (puertas) {
    return auto.puertas === puertas; //convertimos a entero
  }
  return auto;
}
function filtroPTransmision(auto) {
  const { transmision } = datosBusqueda;

  if (transmision) {
    return auto.transmision === transmision; //convertimos a entero
  }
  return auto;
}
function filtroColor(auto) {
  const { color } = datosBusqueda;

  if (color) {
    return auto.color === color; //convertimos a entero
  }
  return auto;
}
