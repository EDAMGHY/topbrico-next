import { useEffect, useState } from "react";

export const useLoopArray = <T>(array: T[], interval: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [array.length, interval]);

  return [array[currentIndex], currentIndex] as const;
};
