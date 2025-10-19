// lib/constants.ts

// Base animation speed in milliseconds
export const SPEED = 100;

// Returns a style object with a calculated animation delay
export const delay = (multiplier: number = 1) => ({
  animationDelay: `${multiplier * SPEED}ms`,
});
