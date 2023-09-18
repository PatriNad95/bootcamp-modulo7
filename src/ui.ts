import { Mensajes, score } from "./modelo";
import { mostrarCarta } from "./motor";

const buttonAsk = document.getElementById("askCard");

const noMoreCards = document.getElementById("noMoreCards");

const message = document.getElementById("message");

const startAgain = document.getElementById("startAgain");

export const pideCarta = (carta: number): void => {
  const newCardShown = document.getElementById("card");
  let puntuacion = 0;
  if (carta === 1) {
    puntuacion = 1;
  } else if (carta === 10 || carta === 11 || carta === 12) {
    puntuacion = 0.5;
  } else {
    puntuacion = carta;
  }
  if (
    newCardShown !== null &&
    newCardShown !== undefined &&
    newCardShown instanceof HTMLImageElement
  ) {
    newCardShown.src = mostrarCarta(carta);
    score.puntos = score.puntos + puntuacion;
    muestraPuntuacion(score.puntos);
    if (score.puntos > 7.5) {
      showMessage(Mensajes.GAME_OVER);
    }
  }
};

export function muestraPuntuacion(puntuacion: number) {
  const score = document.getElementById("score");
  if (score !== null && score !== undefined) {
    score.innerHTML = puntuacion.toString();
  }
}

export function showMessage(mensaje: string) {
  if (message !== null && message !== undefined) {
    message.innerHTML = mensaje;
    if (buttonAsk !== null && buttonAsk !== undefined) {
      buttonAsk.hidden = true;
    }
    if (noMoreCards !== null && noMoreCards !== undefined) {
      noMoreCards.hidden = true;
    }
    if (startAgain !== null && startAgain !== undefined) {
      startAgain.hidden = false;
    }
  }
}

export const empezarNuevo = (): void => {
  score.puntos = 0;
  pideCarta(score.puntos);
  showMessage("");
  if (buttonAsk !== null && buttonAsk !== undefined) {
    buttonAsk.hidden = false;
  }
  if (noMoreCards !== null && noMoreCards !== undefined) {
    noMoreCards.hidden = false;
  }
  if (startAgain !== null && startAgain !== undefined) {
    startAgain.hidden = true;
  }
};
