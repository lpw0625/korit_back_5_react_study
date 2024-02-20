import React from 'react'
import { useState } from "react";
import CounterInput from './CounterInput';
import CounterButton from './CounterButton';


function Counter() {
    const [ number, setNumber ] = useState(0);
    const [ count, setCount ] = useState(0);

    const handleOnIncrease = () => {
        setNumber(number+count);
    }

    const handleOnDecrease = () => {
        setNumber(number-count);
    }

    return (
        <>
            <h1>{number}</h1>
            <CounterInput setCount={ setCount }/>
            <CounterButton title={"-"} onClickaaa={handleOnDecrease}/>
            <CounterButton title={"+"} onClickaaa={handleOnIncrease}/>
        </>
  );
}

export default Counter;
