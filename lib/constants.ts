// lib/constants.ts

export const SPEED = 100;

// Helper function to compute animation delay styles
export const delay = (multiplier: number = 1) => ({
  animationDelay: `${multiplier * SPEED}ms`,
});