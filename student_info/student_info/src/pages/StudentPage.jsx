import React, { useRef, useState } from "react";
import InfoButtons from "../components/infoButtons/InfoButtons";
import InfoInput from "../components/InfoInput";
import StudentInfo from "../components/StudentInfo";

function StudentPage(props) {
    const studentObj = { //빈값으로 공용으로 쓰이는 존재.
         name: "",
         age: "",
        address: ""
       };
       
       const [ student, setStudent ] = useState(studentObj);
       const [ inputValues, setInputValues ] = useState(studentObj);
       //const [ refresh, setRefresh] = useState(false);
       const inputRef = {
         name: useRef(),
         age: useRef(),
         address: useRef()
       }
       
       const nameInputRef = useRef();
       const ageInputRef = useRef();
       const addressRef = useRef();
       
       
         // 상태가 변하면 useEffect를 작동시켜라. 두개가 있다면 둘 중 하나를 작동.
                       // 맨처음 한번만 동작하고 안한다. 
       
       
        //email이라는 변수를 키값으로 쓰고 싶을때
       
       
        //email이라는 변수를 키값으로 쓰고 싶을때
       // 키값은 바로 phone이 되고 변수는 저 안에 들어간다. 
         
         
           /* 
         js객체 특징 
         1. 키값은 문자열이어도 된다.
         2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 [] 묶어서 참조할 수 있다.
         3. 변수명만 입력하면 자체를 객체의 속성과 value로 한번에 정의할 수 있다.
       
         */
       
       
        const handleInputChange = (e) => {
             const {name, value } = e.target;
        
             setInputValues ({
               ...inputValues,
               [name]: value
             });
           } 
       
           const handleOnOK = () => {
               setStudent(inputValues);  
           }
       
           const handleOnClean = () => {
             setStudent(studentObj);
           }
       
         return (
       
           <>
           <StudentInfo title="이름" text={student.name}/>
           <StudentInfo title="나이" text={student.age}/>
           <StudentInfo title="주소" text={student.address}/>
          
           <InfoInput 
           name={"name"}
           onChange={handleInputChange}
           value={inputValues.name}
           placeholder='이름'
           inputRef={inputRef.name}
           />
       
       
       <InfoInput 
           name={"age"}
           onChange={handleInputChange}
           value={inputValues.age}
           placeholder='나이'
           inputRef={inputRef.age}
           />
       
       
       <InfoInput 
           name={"address"}
           onChange={handleInputChange}
           value={inputValues.address}
           placeholder='주소'
           inputRef={inputRef.address}
       
           />
       
           <InfoButtons>
             <button onClick={handleOnOK}>확인</button>
             <button onClick={handleOnOK}>비우기</button>
           </InfoButtons>  
         </>
       
         );
       }
       
       export default StudentPage;