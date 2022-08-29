let puntosCompu = 0;
let puntosUsuario = 0;
let nombreUsuario = "";

function solicitarNombreUsuario() {
  let userName = "";
  do{
    userName = prompt("Ingresa tu nombre antes de competir:");
  } while (userName == null || !isNaN(userName))

  alert("Bienvenido " + userName + "!!! .... te voy a ganar! ... pulsa aceptar, es al mejor de 5...");
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

  let jugador = prompt("piedra, papel o tijera?")

  if (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijera") {
      alert("Volver a elegir correctamente!, este intento se anula para ambos.")
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
      console.log("*empate*")
  } else {
      alert("perdiste :(. Elegiste " + jugador + " y " + "la computadora eligio " + luckyNumber);
      puntosCompu++;
  }

  console.log(i +"-"+ puntosCompu +"-"+ puntosUsuario);
  
}

if(puntosCompu > puntosUsuario) {
  alert("("+puntosCompu+" a "+ puntosUsuario +") -> Te ha ganado una vez más una simple máquina que solo suma... pero suma muy muy rápido!!!");
} else if( puntosCompu < puntosUsuario) {
  alert("Felicitaciones "+ nombreUsuario +"!!! eres un maestro del kunfu!!! ... ganaste por " + (puntosUsuario-puntosCompu));
} else {
  alert("("+puntosCompu+" a "+ puntosUsuario +") ->Empataste con una máquina... mal de muchos, consuelo de tontos...vuelve a intentar!!!");
}


