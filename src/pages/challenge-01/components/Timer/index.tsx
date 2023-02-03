import { formatRandomNumberInMinutes } from "@/utils";
import { useEffect, useState } from "react";
import {
  ProgressIndicator,
  ProgressRoot,
  TimerClock,
  TimerContainer,
} from "./styles";

interface ITimer {
  progressbar: number;
  time: number;
  currentTime: number;
}

export function Timer({ progressbar, currentTime, time }: ITimer) {
  const [progress, setProgress] = useState(0);
  const timeFormatted = formatRandomNumberInMinutes(String(time), ":", 2);
  const currentTimeFormatted = formatRandomNumberInMinutes(
    String(currentTime),
    ":",
    2
  );

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressbar), 500);

    return () => clearTimeout(timer);
  }, [progressbar]);

  return (
    <TimerContainer>
      <ProgressRoot value={progress}>
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressRoot>
      <TimerClock>
        <span>{currentTimeFormatted}</span>
        <span>{timeFormatted}</span>
      </TimerClock>
    </TimerContainer>
  );
}
