
import React from 'react';

function CounterButton({title, onClickaaa}) {

    return (
        <button onClick={onClickaaa}>{ title }</button>
    )
}

export default CounterButton;