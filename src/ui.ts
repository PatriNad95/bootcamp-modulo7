import { score } from "./modelo";
import { mostrarCarta } from "./motor";

export function muestraPuntuacion() {
  const scoreHtml = document.getElementById("score");
  if (
    scoreHtml !== null &&
    scoreHtml !== undefined &&
    scoreHtml instanceof HTMLHeadingElement
  ) {
    scoreHtml.innerHTML = score.puntos.toString();
  } else {
    console.error("El elemento con id score no es un elemento h1");
  }
}

export function pintarCarta(carta: number): void {
  const newCardShown = document.getElementById("card");
  if (
    newCardShown !== null &&
    newCardShown !== undefined &&
    newCardShown instanceof HTMLImageElement
  ) {
    newCardShown.src = mostrarCarta(carta);
  } else {
    console.error("El elemento con id newCardShown no es un elemento image");
  }
}

export function showMessage(mensaje: string): void {
  const message = document.getElementById("message");
  if (
    message !== null &&
    message !== undefined &&
    message instanceof HTMLElement
  ) {
    message.innerHTML = mensaje;
  } else {
    console.error("El elemento con id message no es un elemento HTML");
  }
}

export function buttonStartAgain(mostrar: boolean) {
  const startAgain = document.getElementById("startAgain");
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = mostrar;
  } else {
    console.error("El elemento con id startAgain no es un elemento button");
  }
}

export function buttonNoMoreCards(mostrar: boolean) {
  const noMoreCards = document.getElementById("noMoreCards");
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = mostrar;
  } else {
    console.error("El elemento con id noMoreCards no es un elemento button");
  }
}

export function buttonAskShow(mostrar: boolean) {
  const buttonAsk = document.getElementById("askCard");
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = mostrar;
  } else {
    console.error("El elemento con id buttonAsk no es un elemento button");
  }
}

export function buttonWhatWouldHappen(mostrar: boolean) {
  const whatWouldHappen = document.getElementById("whatWouldHappen");
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = mostrar;
  } else {
    console.error(
      "El elemento con id whatWouldHappen no es un elemento button"
    );
  }
}
