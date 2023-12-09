import { Estado } from "./modelo";

export function obtenerValorAleatorio() {
  const valorAleatorio: number = Math.floor(Math.random() * 10) + 1;
  return valorAleatorio;
}

export function sumarPuntuacion(puntosActuales: number, carta: number): number {
  return puntosActuales + carta;
}

export function obtenerEstadoPartida(puntosActuales: number): string {
  let estado: string;
  if (puntosActuales < 7.5) {
    estado = Estado.PLANTADA;
  } else if (puntosActuales === 7.5) {
    estado = Estado.GANADA;
  } else {
    estado = Estado.PERDIDA;
  }
  return estado;
}

export function obtenerPuntosCarta(carta: number): number {
  return carta <= 7 ? carta : 0.5;
}
