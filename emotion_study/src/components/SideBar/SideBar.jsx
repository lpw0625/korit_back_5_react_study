/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaCaretRight,FaCaretLeft } from "react-icons/fa6";
import * as S from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";

 function SideBar(props) {
    const [isShow, setShow ] = useState(false);

       
  return (
    <aside css={S.layout(isShow)}> 
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
              {/* setShow(!isShow)
              이벤트가 발생할 때마다 현재 상태의 반대 값을
               setShow 함수에 전달하여 상태를 업데이트
               */}

                {isShow ? <FaCaretLeft /> : <FaCaretRight />} 
            </button>
               <ul css={S.menuList}>
                    {MENUS.map(menu => // MENUS 배열의 각 요소에 대해 반복문을 실행.
                        <Link css={S.menuItem} to={`${menu.path}
                          ${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key,value]) => 
                             key + "=" + value).join("&")}`} 
                        key={menu.id} onClick={() => setShow(false)}>
                          {/* 각 메뉴의 고유한 식별자를 설정하여 React가 요소를  효율적으로 관리를 하게 해줌. */}
                            <li>{menu.name}</li>
                    </Link>)}   
               </ul>
        </aside>
  );
}

export default SideBar;

// useState()란? 
/**
 * 1. 리액트에서 기본으로 제공해주는 훅 함수들 중 하나
 * 2. 2개의 원소를 갖는 배열이 반환된다.
 * 3. 첫 번째 값은 원소에는 상태 값이 반환
 * 4. 두 번째 값은 setter 함수가 반환되게 된다.
 * 5. useState([]) 빈 배열을 상태로 가지며 랜더링 할때는 초기값으로 빈 배열을 가지며
 * 6 업데이트를 할때마다 컴포넌트가 리랜더링 된다
 */

