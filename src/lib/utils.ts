import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserName = (name: string) => {
  return name
    .trim()
    .split(" ")
    .map((str) => str[0])
    .join("");
};

export const generateRandomNumber = (min: number = 1, max: number = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomDimensions = (
  min: number = 1000,
  max: number = 2000
) => {
  return `${generateRandomNumber(min, max)}/${generateRandomNumber(min, max)}`;
};
