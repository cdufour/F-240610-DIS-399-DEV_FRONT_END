import React from 'react'
import { useState } from 'react'

const Addition = ({difficulty}) => {

    const [result, setResult] = useState('');
    const levels = {easy: 10, medium: 100, hard: 1000};

    if (!difficulty) difficulty = 'easy'; // by default

    const n1 =  Math.floor(Math.random() * levels[difficulty]);
    const n2 =  Math.floor(Math.random() * levels[difficulty]);

    function onClick() {
        setResult(n1 + n2)
    }

    return (
        <div>
            <span>{n1}</span> + <span>{n2}</span>
            <button onClick={onClick}>Résultat</button>
            <span>{result}</span>
        </div>
    )
}

export default Addition