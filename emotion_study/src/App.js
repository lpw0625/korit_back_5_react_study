import {Reset} from "styled-reset";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import SideBarTop from "./components/SideBarTop/SideBarTop";
import RootLayout from "./components/RootLayout/RootLayout";
import Mypage from "./pages/Mypage/Mypage";
import { MENUS } from "./constants/menu";
import ImageEx from "./pages/ImageEx/ImageEx";



function App() {
  return (
    <>

      <Reset />
        <SideBar/>
        <SideBarTop/>
        <RootLayout>
           <Routes>
            {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}
            {/* <Route path="/mypage" element={ <Mypage />}/>
            <Route path="/board" element={<>게시판</>}/>
            <Route path="/notice" element={<>공지사항</>}/>
            <Route path="/notice" element={<ImageEx/>}/>
            <Route /> */}
          </Routes>
          </RootLayout>
       
    </>
  );
}

export default App;
