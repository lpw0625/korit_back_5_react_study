/** @jsxImportSource @emotion/react */
import { useMemo,  useState } from 'react'
import * as S from "./style";
import { Link } from 'react-router-dom';

function SideBarTop()  {
    const [menuShow, setMenuShow ] = useState(false);

    const menus = useMemo(() => [
        { 

            id: 1,
            path: "/Mypage",
            name: "마이페이지"
            
        },

        { 

            id: 2,
            path: "/Gallery",
            name: "갤러리"
            
        },

        { 

            id: 3,
            path: "Option",
            name: "설정"
            
        }
    ], []);


  return (
        <aside css= {S.layout(menuShow)}>
            <button css={S.toggleButton} onClick={() => setMenuShow(!menuShow)}>
                
            </button>
                 <ul css={S.menuList}>
                    {menus.map(menu =>
                    <Link css={S.menuItem} to={menu.path} key={menu.id} onClick={() => setMenuShow(false)}>
                           <li>{menu.name}</li>

                    </Link>)}          
                </ul>
    </aside>
  );
}

export default SideBarTop