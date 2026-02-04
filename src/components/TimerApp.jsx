import { useState, useRef } from "react";

export default function TimerApp() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current) return; // prevent multiple intervals

        setIsRunning(true);

        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const pauseTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setCount(0);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Counter: {count}</h2>

            <button onClick={startTimer}>
                {isRunning ? "Running..." : count === 0 ? "Start" : "Resume"}
            </button>

            <button onClick={pauseTimer}>Pause</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}
