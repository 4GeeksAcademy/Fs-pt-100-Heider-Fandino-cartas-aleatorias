import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let tipoCarta = ["Diamantes", "Espada", "Corazon", "Trebols"];
  let Cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let NumeroAleatorio = Math.floor(Math.random() * Cartas.length);
  let tipoCartaAleatorio = Math.floor(Math.random() * tipoCarta.length);
  let cartaFinal = tipoCarta[tipoCartaAleatorio];

  document.getElementById("contenedorcarta").innerHTML = Cartas[NumeroAleatorio];


  document.getElementById("carta").className = "";
  document.getElementById("carta").classList.add("card");
  document.getElementById("carta").classList.add(ObteniendoCarta(cartaFinal));

 };

function ObteniendoCarta(tipoDeCarta) {
  switch (tipoDeCarta) {
    case "Diamantes":
      return "tipoDeCarta-diamantes";
    case "Espada":
      return "tipoDeCarta-espada";
    case "Corazon":
      return "tipoDeCarta-corazon";
    case "Trebols":
      return "tipoDeCarta-trebols";
    default:
      return "";
  }
}