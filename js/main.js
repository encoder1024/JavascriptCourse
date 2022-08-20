let puntosCompu = 0;
let puntosUsuario = 0;

for (let i=0; i < 5; i++) {
  let luckyNumber = Math.floor(Math.random() * 3);

  if (luckyNumber == 0) {
      luckyNumber = 'piedra';
  } else if (luckyNumber == 1) {
      luckyNumber = 'papel';
  } else {
      luckyNumber = 'tijera';
  }

  let jugador = prompt('piedra papel o tijera?')

  if (jugador !== 'piedra' && jugador !== 'papel' && jugador !== 'tijera') {
      alert('Volve a elegir correctamente!')
  } else if (jugador == 'piedra' && luckyNumber == 'tijera') {
      alert('Felicitaciones ganaste! elegiste ' + jugador + ' y ' + 'la computadora eligio ' + luckyNumber);
      puntosUsuario++;
  } else if (jugador == 'tijera' && luckyNumber == 'papel') {
      alert('Felicitaciones ganaste! elegiste ' + jugador + ' y ' + 'la computadora eligio ' + luckyNumber);
      puntosUsuario++;
  } else if (jugador == 'papel' && luckyNumber == 'piedra') {
      alert('Felicitaciones ganaste! hiciste ' + jugador + ' y ' + 'la computadora eligio ' + luckyNumber);
      puntosUsuario++;
  } else if (jugador == luckyNumber) {
      alert('Empate. Elegiste ' + jugador + ' y ' + 'la computadora eligio ' + luckyNumber);
  } else {
      alert('perdiste :(. Elegiste ' + jugador + ' y ' + 'la computadora eligio ' + luckyNumber);
      puntosCompu++;
  }
}

if(puntosCompu > puntosUsuario) {
  alert("("+puntosCompu+" a "+ puntosUsuario +") -> Te ha ganado una vez más una simple máquina que solo suma... pero suma muy muy rápido!!!");
} else if( puntosCompu < puntosUsuario) {
  alert("Felicitaciones!!! eres un maestro del kunfu!!! ... ganaste por " + (puntosUsuario-puntosCompu));
} else {
  alert("("+puntosCompu+" a "+ puntosUsuario +") ->Empataste con una máquina... mal de muchos, consuelo de tontos...vuelve a intentar!!!");
}


