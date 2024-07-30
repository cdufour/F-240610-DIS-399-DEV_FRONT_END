import { useState } from 'react'

export default function CounterFC() {
    //let count = 5;
    const [count, setCount] = useState(0);

    const onIncrement = () => {
        //count += 1; // update la variable count
        //console.log(count);
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <span>{count}</span>
        </div>
    )
}