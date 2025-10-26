// Propiedades en venta (primeras 3 visibles en index)
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
  }
];

// Propiedades en alquiler (primeras 3 visibles en index)
const propiedades_alquiler = [
  {
    nombre: "Oporto",
    src: "assets/imgs/oporto.jpg",
    descripcion: "Departamento en alquiler en Oporto, Portugal.",
    ubicacion: "Rua de Santa Catarina 150, Oporto",
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
    ubicacion: "Via del Corso 50, Roma",
    habitaciones: 3,
    banos: 1,
    costo: 1500,
    smoke: true,
    pets: false
  },
  {
    nombre: "Iquique",
    src: "assets/imgs/iquique.jpg",
    descripcion: "Departamento frente al mar en Iquique, Chile.",
    ubicacion: "Av. Costanera 120, Iquique",
    habitaciones: 3,
    banos: 2,
    costo: 1300,
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


// Mostrar las propiedades en venta
renderPropiedades(propiedades_venta, "venta-container");

// Mostrar las propiedades en alquiler
renderPropiedades(propiedades_alquiler, "alquiler-container");
