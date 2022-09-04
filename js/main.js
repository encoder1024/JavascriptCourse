let puntosCompu = 0;
let puntosUsuario = 0;

let opciones = ["piedra","papel","tijera"];

const getLastArrItem = (arr) => { 
  let lastItem=arr[arr.length-1];
  return lastItem;  
}  

class Usuario{
  resultados = [];

  constructor (nombre, puntaje){
    this.nombre = nombre;
    this.puntaje = puntaje;
  }

  solicitarNombreUsuario() {
    let userName = "";
    do{
      userName = prompt("Ingresa tu nombre antes de competir:");
    } while (userName == null || !isNaN(userName))
  
    alert("Bienvenido " + userName + "!!! .... te voy a ganar! ... pulsa aceptar para iniciar el juego!");
    this.nombre = userName;
    return this.nombre;
  }

  puntajeSube(step){
    this.puntaje = this.puntaje + step;
  }

  puntajeBaja(step){
    this.puntaje = this.puntaje - step;
  }

  continuar(){
    let seguimos = true;
    let incompleto = true;
    do{
      let opcion = parseInt(prompt("1-Continuar o 2-Terminar", 1), 10);
      if (isNaN(opcion) || opcion > 2 || opcion < 1) {
        alert("Volver a elegir correctamente!");
      } else {
        if(opcion == 2){
          seguimos = false;
        }
        incompleto = false;
      }
    } while (incompleto);
    return seguimos;
  }

  contarIgualdades(resultados){
    let cuentaEmpates = 0;
    for (const result of resultados) {
      const auxiliar = result.split("-");
      if(auxiliar[1] == auxiliar[2]){
        cuentaEmpates++;
      }
    }
    return cuentaEmpates;
  }

  contarEmpates(resultados){
    let cuentaEmpates = 0;
    let auxiliar = getLastArrItem(resultados).split("-");
    cuentaEmpates = auxiliar[0]-auxiliar[1]-auxiliar[2];
    return cuentaEmpates;
  }
}

usuarioPrincipal = new Usuario("", 0);

usuarioPrincipal.solicitarNombreUsuario();

let i = 1;

do {
  let luckyNumber = Math.floor(Math.random() * 3);
  let opcionCompu = "";
  

  opcionCompu = opciones[luckyNumber];

  let opcionJugadorNum = parseInt(prompt("1-"+opciones[0]+", 2-"+opciones[1]+" o 3-"+opciones[2]+"?", 1),10);
  let opcionJugador = "";

  console.log(opcionJugadorNum);

  if (isNaN(opcionJugadorNum) || opcionJugadorNum > 3 || opcionJugadorNum < 1) {
    alert("Volver a elegir correctamente!, este intento se anula para ambos.");
    console.log(opcionJugadorNum);
  } else {
    console.log(opcionJugadorNum);
    opcionJugador = opciones[opcionJugadorNum-1];
    if (opcionJugador == opciones[0] && opcionCompu == opciones[2]) {
        alert("Felicitaciones "+ usuarioPrincipal.nombre +" ganaste! elegiste " + 
        opcionJugador + " y " + "la computadora eligio " + opcionCompu);
        usuarioPrincipal.puntajeSube(1);
    } else if (opcionJugador == opciones[2] && opcionCompu == opciones[1]) {
        alert("Felicitaciones "+ usuarioPrincipal.nombre +" ganaste! elegiste " + 
        opcionJugador + " y " + "la computadora eligio " + opcionCompu);
        usuarioPrincipal.puntajeSube(1);
    } else if (opcionJugador == opciones[1] && opcionCompu == opciones[0]) {
        alert("Felicitaciones "+ usuarioPrincipal.nombre +" ganaste! hiciste " + 
        opcionJugador + " y " + "la computadora eligio " + opcionCompu);
        usuarioPrincipal.puntajeSube(1);
    } else if (opcionJugador == opcionCompu) {
        alert(usuarioPrincipal.nombre +" empataste. Elegiste " + opcionJugador + " y " +
        "la computadora eligio " + opcionCompu);
        console.log("*empate*")
    } else {
        alert(usuarioPrincipal.nombre +" perdiste. Elegiste " + opcionJugador + " y " +
        "la computadora eligio " + opcionCompu);
        puntosCompu++;
    }
  }
  
  usuarioPrincipal.resultados.push(i +"-"+ puntosCompu +"-"+ usuarioPrincipal.puntaje);

  console.log(i +"-"+ puntosCompu +"-"+ usuarioPrincipal.puntaje);

  i++;

} while(usuarioPrincipal.continuar())

if(puntosCompu > usuarioPrincipal.puntaje) {
  alert("("+puntosCompu+" a "+ usuarioPrincipal.puntaje +") -> "+ usuarioPrincipal.nombre +
  " te ha ganado una vez más una simple máquina que solo suma... pero suma muy muy rápido!!!"+
  "\n Mira el detalle: (intento-puntosCompu-puntosUsuario)\n" + usuarioPrincipal.resultados +"\n"+
  "Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
  " durante los " + (i-1) + " intentos." + "\n"+ 
  "Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))+ "\n"+
  "Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %");
} else if( puntosCompu < usuarioPrincipal.puntaje) {
    alert("Felicitaciones "+ usuarioPrincipal.nombre +"!!! eres un maestro del kunfu!!! ... ganaste por " +
    (usuarioPrincipal.puntaje-puntosCompu)+
    "\n Mira el detalle: (intento-puntosCompu-puntosUsuario)\n" + usuarioPrincipal.resultados +"\n"+
    "Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
    " durante los " + (i-1) + " intentos." + "\n"+ 
    "Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))+ "\n"+
    "Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %");
} else {
    alert("("+puntosCompu+" a "+ usuarioPrincipal.puntaje +") -> "+ usuarioPrincipal.nombre + 
    " empataste con una máquina... mal de muchos, consuelo de tontos...vuelve a intentar!!!" +
    "\n Mira el detalle: (intento-puntosCompu-puntosUsuario)\n" + usuarioPrincipal.resultados +"\n"+
    "Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
    " durante los " + (i-1) + " intentos." + "\n"+ 
    "Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))+ "\n"+
    "Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %");
}

console.log(usuarioPrincipal.resultados);

console.log("Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
" durante los " + (i-1) + " intentos.");

console.log("Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados)));
console.log("Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %");

console.log("final del código");


