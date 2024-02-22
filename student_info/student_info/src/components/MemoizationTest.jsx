
import React, { useState, useMemo } from 'react'

 function MemoizationTest({ num1, num2 }) {

    const [num3, setNum3] = useState(0);
    

    console.log("MemoizationTest 랜더링");

    // 둘 중에 하나만 계산이 된다. 하지만 두번째 num2도 계산이 된다. 
    // 계산을 해야되는 경우에 쓰이는 것이 Memoization라고 한다
    // 값을Memoization, 함수를 MemoizationTest라고

    const tempNum1 = useMemo(() => {
    console.log("memo: num1");
    return num1 * 10;
    }, [num1]);

    const tempNum2 = useMemo(() => {
    console.log("memo: num2");
    return num2 + 10000;
    }, [num2]);

    const tempNum3 = useMemo(() => {
        console.log("memo: num3");
        return num3 + 20000;
        }, [num3]);

    const tempNum4 = useMemo(() => {
        console.log("memo: num4");
        return num1 + num2;
        }, [num1, num2]);
    

  return (

    <>
        <button onClick={() => setNum3(num3 + 1)}>num3 증가</button>
        <h3>{tempNum1}</h3>
        <h3>{tempNum2}</h3>
        <h3>{tempNum3}</h3>
        <h3>{tempNum4}</h3>

    </>
  );
}

export default MemoizationTest