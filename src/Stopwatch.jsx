import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch-card">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="time-display">{time}s</div>
      <div className="button-group">
        <button onClick={start} className="stopwatch-btn btn-start">
          Start
        </button>
        <button onClick={stop} className="stopwatch-btn btn-stop">
          Stop
        </button>
        <button onClick={reset} className="stopwatch-btn btn-reset">
          Reset
        </button>
      </div>
    </div>
  );
}