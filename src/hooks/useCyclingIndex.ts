import { useEffect, useState } from "react";

type UseCyclingIndexParams = {
  length: number;
  interval?: number;
  start: boolean;
};

export const useCyclingIndex = ({
  length,
  interval = 3,
  start,
}: UseCyclingIndexParams) => {
  const [index, setIndex] = useState(0);

  const secondsInterval = interval * 1000;

  useEffect(() => {
    if (length <= 0 || secondsInterval <= 0 || !start) return;

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, secondsInterval);

    return () => {
      setIndex(0);
      clearInterval(intervalId);
    };
  }, [length, secondsInterval, start]);

  return index;
};
