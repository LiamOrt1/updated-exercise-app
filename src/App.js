import React, { useState } from "react";
import "./App.css";
import DurationExercise from "./components/DurationExercise/index.js";
import RepetitionExercise from "./components/RepetitionExercise/index.js";
import RunningExercise from "./components/RunningExercise/index.js";

function App() {
  const [selected, setSelected] = useState(null);

  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Sit-Ups", type: "repetition" },
    { name: "Pull-Ups", type: "repetition" },
    { name: "Running Track", type: "running" },
    { name: "Plank", type: "duration" },
    { name: "Treading Water", type: "duration" }
  ];

  const pickExercise = () => {
    if (!selected) return null;

    if (selected.type === "repetition") {
      return <RepetitionExercise name={selected.name} />;
    }

    if (selected.type === "duration") {
      return <DurationExercise name={selected.name} />
    }

    if (selected.type === "running") {
      return <RunningExercise />
    }
  };

  return(
    <div className="App">
      <h1>Exercises</h1>

      {!selected && (
        <div>
          {exercises.map((exercise, index) => (
            <button key={index}
                    onClick={() => setSelected(exercise)}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      )}

      {selected && (
        <div>
          <button onClick={() => setSelected(null)}>
            Back
          </button>
          {pickExercise()}
        </div>
      )}

    </div>
  );
}

export default App;