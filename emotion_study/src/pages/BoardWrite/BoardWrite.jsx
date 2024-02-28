/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModuels";
import { useInput, useMaxValueValidateInput } from "../../hooks/inputHook";
import { useQuillInput } from "../../hooks/quillHook";
import { useNavigate } from "react-router-dom";
import { useLoadList } from "../../hooks/boardlistHook";

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 120px;
    border: 1px solid #757070;
    padding: 50px 0px;
    
`;

const headertitle = css`
    margin-bottom: 30px; 
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    

`;

const boardTitle = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #858585;
    padding: 10px;
   width: 90%;
   background-color: white;

`;

const submitButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
   width: 90%;
   background-color: white;
   font-weight: 600;
   cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }

`;

function BoardWrite() {
const navigate = useNavigate();
const [ inputValue, handleInputChange ] = useMaxValueValidateInput(10);
const [ quillValue, handleQuillValueChange ] = useQuillInput();
const [ boardList, lastId] = useLoadList()

    /// useState최적화
    /// useEffect >> memo 
    /// callback안에는 함수???? 
   const handleSubmitClick = () => {
    const lastIndex = boardList.length -1;
    const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;

    const board = {
        boardId : lastId + 1,
        boardTitle: inputValue,
        boardContent: quillValue
    };

    const newBoardList = [...boardList, board];
    localStorage.setItem("boardList", JSON.stringify(newBoardList));
    alert("글 작성 완료.")
   // window.location.replace(); // 절대 쓰면 안된다. 랜더링을 처음부터 다시 진행을 하게 되며 페이지 전체를 새로고침을 하게 된다.
    navigate("/board./list")
}


  return (
    <div css={layout}>
        <h1 css={headertitle}>글 작성하기</h1>
        <input css={boardTitle} 
        type="text"  
        placeholder="제목을 입력하세요." 
        onChange={handleInputChange}
        value={inputValue}/>

        <ReactQuill 
        style={{
            width: "90%",
            height: "400px"

                }} 
                modules={QUILL_MODULES}
                onChange={handleQuillValueChange}
        />
        <button css={submitButton} onClick={handleSubmitClick}>작성완료</button>

    </div>
  )
}

export default BoardWrite