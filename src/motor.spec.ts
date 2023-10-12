import { Mensajes, score } from "./modelo";
import { vi } from "vitest";
import {
  mostrarCarta,
  seleccionMensaje,
  calcularCarta,
  obtenerPuntosCarta,
} from "./motor";

describe("Funciones del juego", () => {
  it("debería mostrar una carta válida", () => {
    const carta = mostrarCarta(1);
    expect(carta).toMatch(
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
    );
  });

  it("debería seleccionar un mensaje correcto 1", () => {
    vi.spyOn(score, "puntos", "get").mockReturnValue(4);
    const mensaje = seleccionMensaje();
    expect(mensaje).toBe(Mensajes.LESS_FOUR);
  });

  it("debería seleccionar un mensaje correcto 2", () => {
    vi.spyOn(score, "puntos", "get").mockReturnValue(5);
    const mensaje = seleccionMensaje();
    expect(mensaje).toBe(Mensajes.EQUAL_FIVE);
  });

  it("debería seleccionar un mensaje correcto 3", () => {
    vi.spyOn(score, "puntos", "get").mockReturnValue(7.5);
    const mensaje = seleccionMensaje();
    expect(mensaje).toBe(Mensajes.EQUAL_SEVEN_HALF);
  });

  it("debería seleccionar un mensaje correcto 4", () => {
    vi.spyOn(score, "puntos", "get").mockReturnValue(6);
    const mensaje = seleccionMensaje();
    expect(mensaje).toBe(Mensajes.LESS_SEVEN);
  });

  it("debería seleccionar un mensaje correcto 5", () => {
    vi.spyOn(score, "puntos", "get").mockReturnValue(9);
    const mensaje = seleccionMensaje();
    expect(mensaje).toBe(Mensajes.GAME_OVER);
  });

  it("debería calcular una carta válida 1", () => {
    const carta = calcularCarta(8);
    expect(carta).toBe(10);
  });

  it("debería calcular una carta válida 2", () => {
    const carta = calcularCarta(5);
    expect(carta).toBe(5);
  });

  it("debería obtener puntos de carta correctos 1", () => {
    const puntos = obtenerPuntosCarta(6);
    expect(puntos).toBe(6);
  });

  it("debería obtener puntos de carta correctos 2", () => {
    const puntos = obtenerPuntosCarta(11);
    expect(puntos).toBe(0.5);
  });
});
