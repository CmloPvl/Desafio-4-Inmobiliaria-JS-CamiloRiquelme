// Arreglo completo de propiedades en alquiler
const propiedades_alquiler = [
  {
    nombre: "Oporto",
    src: "assets/imgs/oporto.jpg",
    descripcion: "Departamento en alquiler en Oporto, Portugal.",
    ubicacion: "Rua da Alegria, Oporto",
    habitaciones: 4,
    banos: 2,
    costo: 1200,
    smoke: false,
    pets: true
  },
  {
    nombre: "Roma",
    src: "assets/imgs/roma.jpg",
    descripcion: "Departamento acogedor en Roma, Italia.",
    ubicacion: "Via del Corso, Roma",
    habitaciones: 3,
    banos: 1,
    costo: 1500,
    smoke: true,
    pets: false
  },
  {
    nombre: "Salerno",
    src: "assets/imgs/salerno.jpg",
    descripcion: "Hermoso apartamento en Salerno, Italia.",
    ubicacion: "Via Roma, Salerno",
    habitaciones: 2,
    banos: 1,
    costo: 1000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Iquique",
    src: "assets/imgs/iquique.jpg",
    descripcion: "Departamento frente al mar en Iquique, Chile.",
    ubicacion: "Avenida Costanera, Iquique",
    habitaciones: 3,
    banos: 2,
    costo: 1300,
    smoke: true,
    pets: true
  },
  {
    nombre: "El Bolsón",
    src: "assets/imgs/bolson.jpg",
    descripcion: "Casa acogedora en El Bolsón, Argentina.",
    ubicacion: "Calle Principal, El Bolsón",
    habitaciones: 4,
    banos: 2,
    costo: 1400,
    smoke: false,
    pets: false
  },
  {
    nombre: "La Paz",
    src: "assets/imgs/lapaz.jpg",
    descripcion: "Departamento céntrico en La Paz, Bolivia.",
    ubicacion: "Calle Murillo, La Paz",
    habitaciones: 2,
    banos: 1,
    costo: 1000,
    smoke: true,
    pets: true
  }
];
function renderPropiedades(arrayPropiedades, contenedorID) {
  const contenedor = document.getElementById(contenedorID);
  contenedor.innerHTML = ""; // Limpiar contenido previo

  arrayPropiedades.forEach(prop => {
    contenedor.innerHTML += `
      <article class="card">
        <img src="${prop.src}" alt="${prop.nombre}" />
        <div class="card-body">
          <h3>${prop.nombre}</h3>
          <p>${prop.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | 
             <i class="fas fa-bath"></i> ${prop.banos} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
          <p style="color: ${prop.pets ? 'green' : 'red'}">
            ${prop.pets ? '<i class="fas fa-paw"></i> Permitidas' : '<i class="fa-solid fa-ban"></i> No permitidas'}
          </p>
          <p style="color: ${prop.smoke ? 'green' : 'red'}">
            ${prop.smoke ? '<i class="fas fa-smoking"></i> Permitido' : '<i class="fas fa-smoking-ban"></i> No permitido'}
          </p>
        </div>
      </article>
    `;
  });
}

// Renderizamos las propiedades en el contenedor de la página alquiler
renderPropiedades(propiedades_alquiler, "alquiler-container");
