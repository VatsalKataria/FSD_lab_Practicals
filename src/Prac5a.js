import { useState } from "react";

const CounterA = () =>{
    const [count,  set_count] = useState(0);
    const increment = () =>{
        set_count(count + 1);
    };
    const decrement = () =>{
        set_count(count - 1);
    };
    return(
        <div>
            <h2>Counter</h2>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterA;