let puntosCompu = 0;
let puntosUsuario = 0;
let nombreUsuario = "";

function solicitarNombreUsuario() {
  do{
    let userName = prompt("Ingresa tu nombre antes de competir:");
  } while (userName != null && userName.lenght() > 3)

  alert("Bienvenido " + userName + "!!! .... te voy a ganar! ... pulsa aceptar por favor...");
  nombreUsuario = userName;
}

solicitarNombreUsuario();

for (let i=0; i < 5; i++) {
  let luckyNumber = Math.floor(Math.random() * 3);

  if (luckyNumber == 0) {
      luckyNumber = "piedra";
  } else if (luckyNumber == 1) {
      luckyNumber = "papel";
  } else {
      luckyNumber = "tijera";
  }

  let jugador = prompt("piedra papel o tijera?")

  if (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijera") {
      alert("Volve a elegir correctamente!")
  } else if (jugador == "piedra" && luckyNumber == "tijera") {
      alert("Felicitaciones "+ nombreUsuario +" ganaste! elegiste " + jugador + " y " + "la computadora eligio " + luckyNumber);
      puntosUsuario++;
  } else if (jugador == "tijera" && luckyNumber == "papel") {
      alert("Felicitaciones "+ nombreUsuario +" ganaste! elegiste " + jugador + " y " + "la computadora eligio " + luckyNumber);
      puntosUsuario++;
  } else if (jugador == "papel" && luckyNumber == "piedra") {
      alert("Felicitaciones "+ nombreUsuario +" ganaste! hiciste " + jugador + " y " + "la computadora eligio " + luckyNumber);
      puntosUsuario++;
  } else if (jugador == luckyNumber) {
      alert("Empate. Elegiste " + jugador + " y " + "la computadora eligio " + luckyNumber);
  } else {
      alert("perdiste :(. Elegiste " + jugador + " y " + "la computadora eligio " + luckyNumber);
      puntosCompu++;
  }
}

if(puntosCompu > puntosUsuario) {
  alert("("+puntosCompu+" a "+ puntosUsuario +") -> Te ha ganado una vez más una simple máquina que solo suma... pero suma muy muy rápido!!!");
} else if( puntosCompu < puntosUsuario) {
  alert("Felicitaciones "+ nombreUsuario +"!!! eres un maestro del kunfu!!! ... ganaste por " + (puntosUsuario-puntosCompu));
} else {
  alert("("+puntosCompu+" a "+ puntosUsuario +") ->Empataste con una máquina... mal de muchos, consuelo de tontos...vuelve a intentar!!!");
}


