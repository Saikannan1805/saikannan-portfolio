import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function for combining Tailwind and conditional class names cleanly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
