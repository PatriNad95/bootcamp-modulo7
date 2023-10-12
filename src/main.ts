import {
  empezarNuevo,
  initEvents,
  pideCarta,
  plantarse,
  queHubieraPasado,
} from "./motor";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  initEvents();
});

const buttonAsk = document.getElementById("askCard");
if (
  buttonAsk !== null &&
  buttonAsk !== undefined &&
  buttonAsk instanceof HTMLButtonElement
) {
  buttonAsk.addEventListener("click", () => pideCarta());
} else {
  console.error("El elemento con id askCard no es un elemento button");
}

const noMoreCards = document.getElementById("noMoreCards");
if (
  noMoreCards !== null &&
  noMoreCards !== undefined &&
  buttonAsk instanceof HTMLButtonElement
) {
  noMoreCards.addEventListener("click", () => plantarse());
} else {
  console.error("El elemento con id noMoreCards no es un elemento button");
}

const startAgain = document.getElementById("startAgain");
if (
  startAgain !== null &&
  startAgain !== undefined &&
  buttonAsk instanceof HTMLButtonElement
) {
  startAgain.hidden = true;
  startAgain.addEventListener("click", () => empezarNuevo());
} else {
  console.error("El elemento con id startAgain no es un elemento button");
}

const whatWouldHappen = document.getElementById("whatWouldHappen");
if (
  whatWouldHappen !== null &&
  whatWouldHappen !== undefined &&
  whatWouldHappen instanceof HTMLButtonElement
) {
  whatWouldHappen.hidden = true;
  whatWouldHappen.addEventListener("click", () => queHubieraPasado());
} else {
  console.error("El elemento con id whatWouldHappen no es un elemento button");
}
