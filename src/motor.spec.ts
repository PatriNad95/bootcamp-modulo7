import { Estado, score } from "./modelo";
import { vi } from "vitest";
import {
  obtenerEstadoPartida,
  obtenerPuntosCarta,
  obtenerValorAleatorio,
  sumarPuntuacion,
} from "./motor";

describe("obtenerValorAleatorio", () => {
  it("debe devolver el valor esperado", () => {
    const valor = 6;
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    const valorAleatorio = obtenerValorAleatorio();
    expect(valorAleatorio).toEqual(valor);
  });
});

describe("sumarPuntuacion", () => {
  it("debe sumar la puntuación correctamente", () => {
    const initialScore = 5;
    const carta = 5;
    const result = sumarPuntuacion(initialScore, carta);
    expect(result).toEqual(10);
  });
});

describe("obtenerEstadoPartida", () => {
  it("debe ser estado plantada", () => {
    const puntos = 5;
    const result = obtenerEstadoPartida(puntos);
    expect(result).toEqual(Estado.PLANTADA);
  });
  it("debe ser estado ganada", () => {
    const puntos = 7.5;
    const result = obtenerEstadoPartida(puntos);
    expect(result).toEqual(Estado.GANADA);
  });
  it("debe ser estado perdida", () => {
    const puntos = 9;
    const result = obtenerEstadoPartida(puntos);
    expect(result).toEqual(Estado.PERDIDA);
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
