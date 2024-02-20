
/**
 * react component 특징 
 * 1. 파일명과 함수명을 일치시킨다.
 * 2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다.
 * 3. 함수를 꼭 export 해야한다. 
 * 
 * 
 */

import { useState } from "react";


export default function App() { // App1 = default로 잡혀져 있음. 
    let names = ["이평원","이평투","이평삼"];
 // [ <h1>이평원</h1> ,  <h1>이평원</h1>  <h1>이평원</h1>]
    const [ nameArrayState, setNameArrayState ] = useState (["이평원","이평투","이평삼"]);
    const { name, age } = { name: "이평원" , age: 30};
    const [num1, num2,num3,num4 ] = [1,2,3,4];

    console.log("콘솔 호출????????????????????????????????????????");

    const handleClick = () => {
      setNameArrayState ([ ...nameArrayState, "이평사"]);
     console.log(names);
    }

    // 상태관리 
    // 리엑트는 상태관리를 잘해야 프로그램이 정상적으로 잘 뜬다.
    // 상태가 변하면 렌더링이 다시 된다.




  // jsx 문법 
  return <>
      <button onClick={handleClick}>추가</button>
    <div>
      { nameArrayState.map(name => <h1> { name } </h1>)  }
    </div>
  </>;
}





