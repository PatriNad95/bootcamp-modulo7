import { Mensajes, score } from "./modelo";
import {
  obtenerPuntosCarta,
  obtenerValorAleatorio,
  sumarPuntuacion,
} from "./motor";

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

export function mostrarCarta(carta: number) {
  let card: string;
  switch (carta) {
    case 1: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    }
    case 2: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    }
    case 3: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    }
    case 4: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    }
    case 5: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    }
    case 6: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    }
    case 7: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    }
    case 10: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    }
    case 11: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    }
    case 12: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    }
    default: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
    }
  }

  return card;
}

export const plantarse = (): void => {
  const mensajeAMostrar: string = seleccionMensaje();
  showMessage(mensajeAMostrar);
  botonReset();
  buttonWhatWouldHappen(false);
};

export const empezarNuevo = (): void => {
  initEvents();
};

export const pideCarta = (): void => {
  const valorAleatorio: number = obtenerValorAleatorio();
  const valorRealCarta: number = calcularCarta(valorAleatorio);
  pintarCarta(valorRealCarta);
  const puntos: number = obtenerPuntosCarta(valorRealCarta);
  sumarPuntuacion(puntos);
  muestraPuntuacion();
  revisarPartida();
};

export function initEvents() {
  score.puntos = 0;
  pintarCarta(0);
  showMessage("");
  muestraPuntuacion();
  botonesJugar();
}

export function seleccionMensaje(): string {
  let mensaje = "";
  if (score.puntos <= 4) {
    mensaje = Mensajes.LESS_FOUR;
  } else if (score.puntos === 5) {
    mensaje = Mensajes.EQUAL_FIVE;
  } else if (score.puntos === 7.5) {
    mensaje = Mensajes.EQUAL_SEVEN_HALF;
  } else if (score.puntos > 5 && score.puntos <= 7) {
    mensaje = Mensajes.LESS_SEVEN;
  } else {
    mensaje = Mensajes.GAME_OVER;
  }
  return mensaje;
}

export const queHubieraPasado = (): void => {
  const valorAleatorio: number = obtenerValorAleatorio();
  const valorRealCarta: number = calcularCarta(valorAleatorio);
  pintarCarta(valorRealCarta);
  const puntos: number = obtenerPuntosCarta(valorRealCarta);
  sumarPuntuacion(puntos);
  muestraPuntuacion();
  showMessage("Esta puntuación habrias sacado si hubieras seguido jugando");
  botonReset();
  buttonWhatWouldHappen(true);
};

function calcularCarta(valorRealCarta: number): number {
  return valorRealCarta > 7 ? valorRealCarta + 2 : valorRealCarta;
}

const revisarPartida = (): void => {
  if (score.puntos === 7.5) {
    ganarPartida();
  }
  if (score.puntos > 7.5) {
    perderPartida();
  }
};

function ganarPartida() {
  const mensajeAMostrar: string = seleccionMensaje();
  showMessage(mensajeAMostrar);
  botonReset();
}

function perderPartida() {
  const mensajeAMostrar: string = seleccionMensaje();
  showMessage(mensajeAMostrar);
  botonReset();
}

function botonesJugar(): void {
  buttonAskShow(false);
  buttonNoMoreCards(false);
  buttonStartAgain(true);
  buttonWhatWouldHappen(true);
}

function botonReset(): void {
  buttonAskShow(true);
  buttonNoMoreCards(true);
  buttonStartAgain(false);
}
