/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import * as S from "./style";
import { Link } from 'react-router-dom';
import { MENUS } from '../../constants/menu';

function SideBarTop()  {
    const [menuShow, setMenuShow ] = useState(false);


  return (
        <aside css= {S.layout(menuShow)}>
            <button css={S.toggleButton} onClick={() => setMenuShow(!menuShow)}>
                
            </button>
                 <ul css={S.menuList}>
                    {MENUS.map(menu =>
                       <Link css={S.menuItem} to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key,value]) => key + "=" + value).join("&")}`} 
    
                       key={menu.id} onClick={() => setMenuShow(false)}>
                           <li>{menu.name}</li>
                   </Link>)}            
                </ul>
    </aside>
  );
}

export default SideBarTop