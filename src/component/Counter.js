import React, { useState } from 'react';

function Counter() {
    const[count, setCount] = useState(0);

    return(
        <>
        <p>Haz Clickeado {count} veces</p>
        <button onClick={() => setCount(count + 1)}>Dar Click</button>
        </>
    );
}

export default Counter;