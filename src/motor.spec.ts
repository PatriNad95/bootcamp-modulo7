import { score } from "./modelo";
import { vi } from "vitest";
import {
  obtenerPuntosCarta,
  obtenerValorAleatorio,
  sumarPuntuacion,
} from "./motor";

describe("obtenerValorAleatorio", () => {
  it("debe devolver un valor entre 1 y 10", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
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
    const numeroCarta = 6;
    const resultadoEsperado = 6;
    const puntos = obtenerPuntosCarta(numeroCarta);
    expect(puntos).toBe(resultadoEsperado);
  });

  it("debería obtener puntos de carta correctos si es mayor de 8 devuelve 0.5", () => {
    const numeroCarta = 11;
    const resultadoEsperado = 0.5;
    const puntos = obtenerPuntosCarta(numeroCarta);
    expect(puntos).toBe(resultadoEsperado);
  });
});
