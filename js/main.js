let puntosCompu = 0;
/* let puntosUsuario = 0; */

let opcionJugadorNum = 0;

let i = 1;

let opciones = ["piedra","papel","tijera"];

const ctx = document.getElementById('myChart').getContext('2d');

const
  reset = document.getElementById("resetGeneral"),
  terminar = document.getElementById("terminar"),
  btnPiedra = document.getElementById("piedra"),
  btnPapel = document.getElementById("papel"),
  btnTijera = document.getElementById("tijera"), 
  checkBoxManual = document.getElementById("auto-man"),
  checkBoxVersus = document.getElementById("versus"),
  userName = document.getElementById("nombre"),
  velocidad = document.getElementById("velocidad"),
  intentos = document.getElementById("intentos"),
  display = document.getElementById("display"),
  pantalla = document.querySelector(".pantalla"),
  pickUser = document.getElementById("pickUser"),
  pickCompu = document.getElementById("pickCompu"),
  results = document.getElementById("resultadosInstantaneos");

reset.onclick = () => {
  intentos.value = 5;
  userName.value = "";
  i=1;
  results.innerText = "Aquí verás los resultados de cada intento..."
  usuarioPrincipal.resultados.length = 0;
  usuarioPrincipal.puntaje = 0;
  puntosCompu = 0;
  // JS - Destroy exiting Chart Instance to reuse <canvas> element
  let chartStatus = Chart.getChart("myChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  //-- End of chart destroy  
}

terminar.onclick = () => {
  i= parseInt(intentos.value) + 1;
  jugada(0);
}

btnPiedra.onclick = () => {
  pickUser.src = "../img/piedra.png";
  opcionJugadorNum = 1;
  jugada(opcionJugadorNum);
}

btnPapel.onclick = () => {
  pickUser.src = "../img/papel.png";
  opcionJugadorNum = 2;
  jugada(opcionJugadorNum);
}

btnTijera.onclick = () => {
  pickUser.src = "../img/tijera.png";
  opcionJugadorNum = 3;
  jugada(opcionJugadorNum);
}

userName.onkeyup = (e) => {
  usuarioPrincipal.nombre = e.target.value;
}

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

/*   solicitarNombreUsuario() {
    let userName = "";
    do{
      userName = prompt("Ingresa tu nombre antes de competir:");
    } while (userName == null || !isNaN(userName))
  
    alert("Bienvenido " + userName + "!!! .... te voy a ganar! ... pulsa aceptar para iniciar el juego!");
    this.nombre = userName;
    return this.nombre;
  } */



  puntajeSube(step){
    this.puntaje = this.puntaje + step;
  }

  puntajeBaja(step){
    this.puntaje = this.puntaje - step;
  }

  continuar(){
    let seguimos = true;
    if (i > intentos.value) {
      seguimos = false;
    }
/*     let incompleto = true;
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
    } while (incompleto); */
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

/* usuarioPrincipal.solicitarNombreUsuario(); */



function jugada(opcionJugadorNum) {
  if(usuarioPrincipal.continuar()){
    let luckyNumber = Math.floor(Math.random() * 3);
    let opcionCompu = "";
    

    opcionCompu = opciones[luckyNumber];

    switch (opcionCompu) {
      case "piedra":
        pickCompu.src = "../img/piedra.png";
        break;
      case "papel":
        pickCompu.src = "../img/papel.png";
        break;
      default:
        pickCompu.src = "../img/tijera.png";
        break;
    }

  /*   let opcionJugadorNum = parseInt(prompt("1-"+opciones[0]+", 2-"+opciones[1]+" o 3-"+opciones[2]+"?", 1),10); */
    let opcionJugador = "";

    console.log(opcionJugadorNum);

    if (isNaN(opcionJugadorNum) || opcionJugadorNum > 3 || opcionJugadorNum < 1) {
      alert("Volver a elegir correctamente!, este intento se anula para ambos.");
      console.log(opcionJugadorNum);
    } else {
      console.log(opcionJugadorNum);
      opcionJugador = opciones[opcionJugadorNum-1];
      if (opcionJugador == opciones[0] && opcionCompu == opciones[2]) {
          results.innerText ="("+i+ " de "+intentos.value+") "+"Felicitaciones "+ usuarioPrincipal.nombre +" ganaste! elegiste " + 
          opcionJugador + " y " + "la computadora eligio " + opcionCompu;
          usuarioPrincipal.puntajeSube(1);
      } else if (opcionJugador == opciones[2] && opcionCompu == opciones[1]) {
          results.innerText = "("+i+ " de "+intentos.value+") "+"Felicitaciones "+ usuarioPrincipal.nombre +" ganaste! elegiste " + 
          opcionJugador + " y " + "la computadora eligio " + opcionCompu;
          usuarioPrincipal.puntajeSube(1);
      } else if (opcionJugador == opciones[1] && opcionCompu == opciones[0]) {
          results.innerText = "("+i+ " de "+intentos.value+") "+"Felicitaciones "+ usuarioPrincipal.nombre +" ganaste! elegiste " + 
          opcionJugador + " y " + "la computadora eligio " + opcionCompu;
          usuarioPrincipal.puntajeSube(1);
      } else if (opcionJugador == opcionCompu) {
          results.innerText = "("+i+ " de "+intentos.value+") "+usuarioPrincipal.nombre +" empataste. Elegiste " + opcionJugador + " y " +
          "la computadora eligio " + opcionCompu;
          console.log("*empate*")
      } else {
          results.innerText = "("+i+ " de "+intentos.value+") "+usuarioPrincipal.nombre +" perdiste. Elegiste " + opcionJugador + " y " +
          "la computadora eligio " + opcionCompu;
          puntosCompu++;
      }
    }
    
    usuarioPrincipal.resultados.push(i +"-"+ puntosCompu +"-"+ usuarioPrincipal.puntaje);

    console.log(i +"-"+ puntosCompu +"-"+ usuarioPrincipal.puntaje);

    i++;
  } else {
      if(puntosCompu > usuarioPrincipal.puntaje) {
        results.innerText = "("+puntosCompu+" a "+ usuarioPrincipal.puntaje +") -> "+ usuarioPrincipal.nombre +
        " te ha ganado una vez más una simple máquina que solo suma... pero suma muy muy rápido!!!"+
        "\n Mira el detalle: (intento-puntosCompu-puntosUsuario)\n" + usuarioPrincipal.resultados +"\n"+
        "Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
        " durante los " + (i-1) + " intentos." + "\n"+ 
        "Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))+ "\n"+
        "Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %";
      } else if( puntosCompu < usuarioPrincipal.puntaje) {
          results.innerText = "Felicitaciones "+ usuarioPrincipal.nombre +"!!! eres una maestra del kunfu!!! ... ganaste por " +
          (usuarioPrincipal.puntaje-puntosCompu)+
          "\n Mira el detalle: (intento-puntosCompu-puntosUsuario)\n" + usuarioPrincipal.resultados +"\n"+
          "Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
          " durante los " + (i-1) + " intentos." + "\n"+ 
          "Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))+ "\n"+
          "Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %";
      } else {
          results.innerText = "("+puntosCompu+" a "+ usuarioPrincipal.puntaje +") -> "+ usuarioPrincipal.nombre + 
          " empataste con una máquina... mal de muchos, consuelo de tontos...vuelve a intentar!!!" +
          "\n Mira el detalle: (intento-puntosCompu-puntosUsuario)\n" + usuarioPrincipal.resultados +"\n"+
          "Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
          " durante los " + (i-1) + " intentos." + "\n"+ 
          "Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))+ "\n"+
          "Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %";
      }
      
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ganados', 'Perdidos', 'Empates'],
            datasets: [{
                label: '# of Intents',
                data: [usuarioPrincipal.puntaje, puntosCompu, usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
  
  console.log(usuarioPrincipal.resultados);
  
  console.log("Igualdades en el puntaje = " + usuarioPrincipal.contarIgualdades(usuarioPrincipal.resultados) +
  " durante los " + (i-1) + " intentos.");
  
  console.log("Empates = "+(usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados)));
  console.log("Empates(%) = "+((usuarioPrincipal.contarEmpates(usuarioPrincipal.resultados))/(i-1)*100).toFixed(2)+" %");
  
  console.log("final del código");



}





