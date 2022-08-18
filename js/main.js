let continuar = true;
let luckyNumber = Math.floor((Math.random() * 100) + 1);
console.log(luckyNumber);

do{
  let guest = parseInt(prompt("Adivina el número entre 1 y 100..."));
  if (guest == luckyNumber) {
    console.log("Adivinaste!!! Eres libre!!!");
    continuar = false;
  } else if( guest > luckyNumber){
    console.log("Tú número es alto");
  } else {
    console.log("Tú número es bajo");
  }
} while (continuar);
