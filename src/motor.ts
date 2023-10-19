import { score } from "./modelo";

export function obtenerValorAleatorio() {
  const valorAleatorio: number = Math.floor(Math.random() * 10) + 1;
  return valorAleatorio;
}

export function sumarPuntuacion(carta: number): void {
  score.puntos = score.puntos + carta;
}

export function obtenerPuntosCarta(carta: number): number {
  return carta <= 7 ? carta : 0.5;
}
