import React, { useCallback } from 'react'

 function MemoizationTest2({ num1, num2 }) {

    const fx1 = useCallback(() => {
        return num1 + 10000;
    },[num1])

    const fx2 = useCallback(() => {
        return num2 + 20000;
    }, [num2]);// 함수를 다시 대입. 함수를 리턴 받아와야한다.

            

    console.log(fx1 === fx2); // 메모리 주소가 다르기에 다르다.

    return (

        <div>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
        </div>
    )
}

export default MemoizationTest2