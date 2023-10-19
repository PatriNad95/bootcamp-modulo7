import { score } from "./modelo";
import {
  obtenerPuntosCarta,
  obtenerValorAleatorio,
  sumarPuntuacion,
} from "./motor";

describe("obtenerValorAleatorio", () => {
  it("debe devolver un valor entre 1 y 10", () => {
    const valorAleatorio = obtenerValorAleatorio();
    expect(valorAleatorio).toBeGreaterThanOrEqual(1);
    expect(valorAleatorio).toBeLessThanOrEqual(10);
  });
});

describe("sumarPuntuacion", () => {
  it("debe sumar la puntuación correctamente", () => {
    const initialScore = { puntos: 0 };
    const carta = 5;
    sumarPuntuacion(carta);
    expect(score.puntos).toEqual(initialScore.puntos + carta);
  });
});

describe("obtenerPuntosCarta", () => {
  it("debería obtener puntos de carta correctos si es menor de 8 devuelve el mismo valor", () => {
    const puntos = obtenerPuntosCarta(6);
    expect(puntos).toBe(6);
  });

  it("debería obtener puntos de carta correctos si es mayor de 8 devuelve 0.5", () => {
    const puntos = obtenerPuntosCarta(11);
    expect(puntos).toBe(0.5);
  });
});
