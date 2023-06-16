



// Variables globales
const preciosEventos = {
  gauchoTradicional: 25,
  gauchoGourmet: 35,
  gauchoFull: 50
};

// Función para personalizar mi evento
function personalizarEvento() {
  let tipoEvento = prompt("Ingrese el tipo de evento (Gaucho Tradicional / Gaucho Gourmet / Gaucho Full):");
  let invitadosAdultos = parseInt(prompt("Ingrese el número de invitados adultos:"));
  let invitadosNinos = parseInt(prompt("Ingrese el número de niños (menores de 6 años):"));
  let incluirBebidas = prompt("¿Desea incluir bebidas? (si/no)");

  let totalCosto = calcularCostoEvento(tipoEvento, invitadosAdultos, invitadosNinos, incluirBebidas);

  console.log("Detalles del evento:");
  console.log("Tipo de evento: " + tipoEvento);
  console.log("Invitados adultos: " + invitadosAdultos);
  console.log("Invitados niños: " + invitadosNinos);
  console.log("Incluir bebidas: " + incluirBebidas);
  console.log("Costo total: €" + totalCosto);

  alert("Organizaste tu evento. ¡Gracias por elegirnos!");
}

// lo uso calcular el costo total del evento
function calcularCostoEvento(tipoEvento, invitadosAdultos, invitadosNinos, incluirBebidas) {
  let costoPorPersona = 0;

  //esto es  para determinar el costo por persona según el  evento que eligen
  switch (tipoEvento) {
    case "Gaucho Tradicional":
      costoPorPersona = preciosEventos.gauchoTradicional;
      break;
    case "Gaucho Gourmet":
      costoPorPersona = preciosEventos.gauchoGourmet;
      break;
    case "Gaucho Full":
      costoPorPersona = preciosEventos.gauchoFull;
      break;
    default:
      console.log("Evento no válido.");
      return 0;
  }

  let costoAdultos = costoPorPersona * invitadosAdultos;
  let costoTotal = costoAdultos;

  // Agregar costo adicional por bebidas
  if (incluirBebidas === "si") {
    costoTotal += invitadosAdultos * 5;
  }

  // Aplico descuento del 10% si los invitados adultos son mas de 10
  if (invitadosAdultos > 10) {
    costoTotal *= 0.9; // Aplicar descuento del 10%
  }

  return costoTotal;
}

let realizarOtroEvento = true;

while (realizarOtroEvento) {
  personalizarEvento();

  // Pregunto al usuario si quiere realizar otro evento
  let respuesta = prompt("¿Desea realizar otro evento? (si/no)");
  if (respuesta === "no") {
    realizarOtroEvento = false;
  }
}

