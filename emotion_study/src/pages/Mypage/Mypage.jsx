/** @jsxImportSource @emotion/react */
import * as S from "./style"
import eno from "./enosima.jpg";
import { useRef, useState } from "react";

 function Mypage() {
      const [ preview, setPreview] = useState("");
      const imgFileRef = useRef()


      const handleImgFileChange =  (e) => {
           const fileReader = new FileReader();

           if(e.target.files.length === 0) {
            // 파일이 선택되지 않았을 경우 

              return;
           }

           fileReader.onload = (e) => {
            setPreview(e.target.result);
            // 파일 읽기 작업의 결과물로, 읽은 파일의 데이터를 나타낸다.

           };

           fileReader.readAsDataURL(e.target.files[0]);
          // 선택한 파일 목록 중 첫 번째 파일을 가리킵니다.
          // 따라서 첫 번째 파일을 읽고, 그 내용을 데이터 URL로 반환
      } 


  return (
    <div css={S.layout}>
      <div css={S.profileHeader}>
          <h1 css={S.title}>마이페이지</h1>
              <div css={S.profileImg} onClick={ () => imgFileRef.current.click()}>
                <img src={preview} alt="" />
                <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange}/> 
                 {/* ref={imgFileRef} 파일 입력 요소에 대한 참조를 설정합니다. 
                 
                 이를 통해 JavaScript에서 해당 요소에 접근할 수 있습니다.*/  } 


            </div>

          <div css={S.nicknameLayout}>
          <input css={S.nickname} type="text" maxLength={20} />
      </div>
      
      </div>
    
      <div css={S.profileInputLayout}>

        <div css={S.inputBox}>
          <input css={S.profileInput} id="name" type="text"  />
          <label htmlFor="name">이름</label>
        </div>

        <div css={S.inputBox}>
          <input css={S.profileInput} id="birth" type="text" />
          <label htmlFor="birth">생년월일</label>
        </div>
  

        <div css={S.inputBox}>
          <input css={S.profileInput} id="phone" type="text" />
          <label htmlFor="phone">연락처</label>
        </div>
  

        <div css={S.inputBox}>
          <input css={S.profileInput} id="address" type="text" />
          <label htmlFor="address">주소</label>
        </div>
    </div>

      <div css={S.buttonLayout}>
          <button css={S.profileButton}>수정하기</button>
      </div>
     
    </div>
  );
}

export default Mypage;
