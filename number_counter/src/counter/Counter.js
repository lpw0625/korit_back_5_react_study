import { useState } from "react";
import "../counter/countercss/counter.css";

function Counter() {

    const [count, setCount] = useState(0);

    // UseState
    // 상태관리 
    // let [변수명, set변수명] = useState(변수명에 해당하는 초기값 세팅);
    // const []
    //let count = 0;
    // 변수명이랑 내가 조작할 변수를  설정을 해도 된다. 초기값도 설정이 가능하다.
    // 
 
    //plus button 
    const plus = () => {
            setCount(count+1);


    };

    //minus button
    const minus = () => {
        setCount(count-1);


};
    

    return (

<div className="Countercontainer">
        <h1 className="title">Counter</h1>
        <div className="Counter-box">
                <h1 className="count">{count}</h1>
                <div className="button-box">
                        <button className="plus-button"onClick={plus}>+1</button>
                        <button className="minus-button"onClick={minus}>-1</button>
                </div>
        </div>
</div>
    )
}

    export default Counter;
