let datosJSON = `
{
  "hotel": "Hotel Costa Azul",
  "ciudad": "Málaga",
  "estrellas": 4,
  "direccion": {
    "calle": "Avenida del Mar",
    "numero": 12
  },
  "servicios": ["Piscina", "WiFi", "Spa", "Gimnasio", "Restaurante"],
  "habitaciones": [
    {
      "numero": 101,
      "tipo": "Individual",
      "precio": 65,
      "disponible": true
    },
    {
      "numero": 205,
      "tipo": "Doble",
      "precio": 90,
      "disponible": false
    },
    {
      "numero": 310,
      "tipo": "Suite",
      "precio": 150,
      "disponible": true
    },
    {
      "numero": 402,
      "tipo": "Suite Premium",
      "precio": 220,
      "disponible": true
    }
  ],
  "clientes": [
    {
      "nombre": "Laura Gómez",
      "edad": 35,
      "habitacion": 101,
      "noches": 3
    },
    {
      "nombre": "Pedro Sánchez",
      "edad": 50,
      "habitacion": 310,
      "noches": 5
    }
  ],
  "empleados": [
    {
      "nombre": "María López",
      "puesto": "Recepcionista",
      "turno": "Mañana"
    },
    {
      "nombre": "Juan Ruiz",
      "puesto": "Limpieza",
      "turno": "Tarde"
    },
    {
      "nombre": "Ana Torres",
      "puesto": "Gerente",
      "turno": "Completo"
    }
  ]
}
`;

// Parseamos el texto plano del objeto JSON
let datosHotel = JSON.parse(datosJSON);

// console.log(datosHotel); // Descomentar para comprobar por consola que lo ha parseado correctamente

// Generamos y mostramos en un nodo <p> los datos generales del hotel
let generalDataJSON = `
Nombre: ${datosHotel.hotel}<br><br>
Ciudad: ${datosHotel.ciudad}<br><br>
Estrellas: ${datosHotel.estrellas}<br><br>
Dirección: ${datosHotel.direccion.calle}, ${datosHotel.direccion.numero}
`;
document.getElementById("generalData").innerHTML = generalDataJSON;

// Generamos y mostramos en un nodo <ul> los datos generales del hotel
let servicesJSON = "";
for (let i = 0; i < datosHotel.servicios.length; i++) {
    servicesJSON += `<li>${datosHotel.servicios[i]}</li>`
};
document.getElementById("services").innerHTML = servicesJSON;

// Generamos y mostramos en un nodo <ul> los datos de las habitaciones del hotel
let roomsJSON = "";
for (let i = 0; i < datosHotel.habitaciones.length; i++) {
    roomsJSON += `<li>Habitación ${datosHotel.habitaciones[i].numero} - Tipo: ${datosHotel.habitaciones[i].tipo} - Precio: ${datosHotel.habitaciones[i].precio} € - Estado: ${datosHotel.habitaciones[i].disponible ? "Disponible" : "Ocupada"}</li>`
};
document.getElementById("rooms").innerHTML = roomsJSON;

// Generamos y mostramos en un nodo <ul> los datos de los clientes del hotel
let guestJSON = "";
for (let i = 0; i < datosHotel.clientes.length; i++) {
    guestJSON += `<li>${datosHotel.clientes[i].nombre} - Tipo: ${datosHotel.clientes[i].edad} años - Habitación: ${datosHotel.clientes[i].habitacion} - Noches: ${datosHotel.clientes[i].noches}</li>`
};
document.getElementById("guests").innerHTML = guestJSON;

// Generamos y mostramos en un nodo <ul> los datos de los empleados del hotel
let staffJSON = "";
for (let i = 0; i < datosHotel.empleados.length; i++) {
    staffJSON += `<li>${datosHotel.empleados[i].nombre} - ${datosHotel.empleados[i].puesto} - Turno: ${datosHotel.empleados[i].turno}</li>`
};
document.getElementById("staff").innerHTML = staffJSON;