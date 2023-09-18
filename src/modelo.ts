export interface Score {
  puntos: number;
}

export const score: Score = {
  puntos: 0,
};

export enum Mensajes {
  GAME_OVER = "Game Over",
  LESS_FOUR = "Has sido muy conservador",
  EQUAL_FIVE = "Te ha entrado el canguelo eh?",
  EQUAL_SEVEN_HALF = "¡Lo has clavado! ¡Enhorabuena!",
  LESS_SEVEN = "Casi casi...",
}
