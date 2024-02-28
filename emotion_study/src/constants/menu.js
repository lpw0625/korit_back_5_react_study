import Mypage from "../pages/Mypage/Mypage";
import ImageEx from"../pages/ImageEx/ImageEx";
import ImageEx3 from "../pages/ImageEx/ImageEX3/ImageEx3";
import BoradEX from "../pages/BoardEx/BoradEX";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import BoradList from "../pages/BoradList/BoradList";

export const MENUS = [
    {
        id: 1,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시글",
        element: <>게시판</>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element: <>공지사항</>
    },


    { 

        id: 4,
        path: "/image/ex",
        name: "이미지 불러오기",
        element: <ImageEx />
    },


    { 

        id: 5,
        path: "/image/ex3",
        name: "다중업로드",
        element: <ImageEx3 />
    },

    { 

        id: 6,
        path: "/image/ex3",
        name: "이미지 여러개 불러오기",
        element: <ImageEx3 />
    },

       { 

        id: 7,
        path: "/board/write",
        name: "게시글 작성",
        element: <BoardWrite />
    },

    
    { 

        id: 8,
        path: "/board/list",
        name: "게시글 목록",
        element: <BoradList />
    }
];