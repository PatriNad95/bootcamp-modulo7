import { score } from "./modelo";
import { dameCarta, plantarse } from "./motor";
import "./style.css";
import { empezarNuevo, muestraPuntuacion } from "./ui";

muestraPuntuacion(score.puntos);

const buttonAsk = document.getElementById("askCard");

const noMoreCards = document.getElementById("noMoreCards");

const startAgain = document.getElementById("startAgain");

if (buttonAsk !== null && buttonAsk !== undefined) {
  buttonAsk.addEventListener("click", () => dameCarta());
}

if (noMoreCards !== null && noMoreCards !== undefined) {
  noMoreCards.addEventListener("click", () => plantarse(score.puntos));
}

if (startAgain !== null && startAgain !== undefined) {
  startAgain.hidden = true;
  startAgain.addEventListener("click", () => empezarNuevo());
}
