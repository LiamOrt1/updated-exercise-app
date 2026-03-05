import React, { useState, useEffect } from "react";


function DurationExercise({ name }) {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);


    useEffect(() => {
        let interval = null;


        if (running) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
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


    return (
        <div>
            <h1>{name}</h1>
            <h2>{timeFormat()}</h2>


            <button onClick={() => setRunning(true)}>
                Start Timer
            </button>


            <button onClick={() => {
                setRunning(false);
                setSeconds(0);
            }}>
                Reset Timer
            </button>
        </div>
    );
}


export default DurationExercise;
