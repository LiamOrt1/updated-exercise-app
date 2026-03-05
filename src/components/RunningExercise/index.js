import React, { useState, useEffect } from "react";

function RunningExercise() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLaps] = useState([])


    useEffect(() => {
        let interval = null;


        if (running) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [running]);


    const timeFormat = () => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;


        return (
            String(min).padStart(2, "0")
            + ":" +
            String(sec).padStart(2, "0")
        );
    };

    const recordLap = () => {
        setLaps([...laps, timeFormat()]);
    };

    return (
        <div>
            <h1>Running Track</h1>
            <h2>{timeFormat()}</h2>

            <button onClick={() => setRunning(true)}>Start</button>

            <button onClick={recordLap}>Lap</button>

            <button onClick={() => {
                setRunning(false);
                setSeconds(0);
                setLaps([]);
            }}>
                Reset
            </button>

            <h3>Laps</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>{lap}</li>
                ))}
            </ul>
        </div>
    );
}

export default RunningExercise