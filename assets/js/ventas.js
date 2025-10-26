
const propiedades_venta = [
  {
    nombre: "Barcelona",
    src: "assets/imgs/barcelona.jpg",
    descripcion: "Hermoso departamento en Barcelona, España.",
    ubicacion: "Carrer de Mallorca, Barcelona",
    habitaciones: 3,
    banos: 2,
    costo: 350000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Amsterdam",
    src: "assets/imgs/amsterdam.jpg",
    descripcion: "Departamento acogedor en Amsterdam, Países Bajos.",
    ubicacion: "Prinsengracht 123, Amsterdam",
    habitaciones: 2,
    banos: 1,
    costo: 280000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Puerto Cisnes",
    src: "assets/imgs/cisnes.JPG",
    descripcion: "Casa frente al mar en Puerto Cisnes, Chile.",
    ubicacion: "Calle Costanera 45, Puerto Cisnes",
    habitaciones: 4,
    banos: 3,
    costo: 150000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Santiago Puente Alto",
    src: "assets/imgs/ptealto.jpg",
    descripcion: "Departamento moderno en Puente Alto, Chile.",
    ubicacion: "Avenida Concha y Toro 567, Puente Alto",
    habitaciones: 3,
    banos: 2,
    costo: 250000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Cochamo",
    src: "assets/imgs/cochamo.jpg",
    descripcion: "Casa familiar en Cochamo, Chile.",
    ubicacion: "Calle Los Cipreses 10, Cochamo",
    habitaciones: 4,
    banos: 2,
    costo: 200000,
    smoke: false,
    pets: false
  },
  {
    nombre: "La Paloma",
    src: "assets/imgs/lapaloma1.jpg",
    descripcion: "Casa frente al mar en La Paloma, Uruguay.",
    ubicacion: "Rambla Costanera 99, La Paloma",
    habitaciones: 3,
    banos: 2,
    costo: 300000,
    smoke: true,
    pets: true
  }
];

function renderPropiedades(arrayPropiedades, contenedorID) {
  const contenedor = document.getElementById(contenedorID);
  contenedor.innerHTML = ""; 

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

renderPropiedades(propiedades_venta, "venta-container");
