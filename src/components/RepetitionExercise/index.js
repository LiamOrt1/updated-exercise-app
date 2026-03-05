import React, { useState } from "react";

function RepetitionExercise({ name }) {
    const [count, setCount] = useState(0);


    return (
        <div>
            <h1>{name}</h1>
            <h2>{count}</h2>


            <button onClick={() => setCount(count + 1)}>
                +1 Rep
            </button>


            <button onClick={() => setCount(0)}>
                Reset Count
            </button>
        </div>
    );
}


export default RepetitionExercise;
