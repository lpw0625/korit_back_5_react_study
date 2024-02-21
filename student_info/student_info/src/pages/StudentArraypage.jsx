
import React, { useEffect, useState, useRef } from 'react'

function StudentArraypage() {
 const [ studentList, setStudentList ] = useState([]);

    const [ inputValue, setInputValue ] = useState({
    id:"",
    name: "",
    age: 0,
    address: ""

 });
 const [updateId, setUpdateId ] = useState(0);

    const staticId = useRef(0);
    // staticId.current 값이 변해도 렌더링 x
    // 재랜더링이 발생해도 초기화되지 않음.

    useEffect(() => {
        console.log(studentList);
    }, [studentList]);
    

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });

    }

    // 이 코드는 입력 필드의 변경 사항을 처리하는 함수인데요, 함수명은 handleInputChange입니다. 다음과 같이 작동합니다:

/*이 함수는 이벤트 객체 e를 매개변수로 받습니다. 
이벤트 객체는 이벤트가 발생한 HTML 요소에 대한 정보를 포함하고 있습니다.
이벤트 객체의 target 속성을 사용하여 이벤트가 발생한 HTML 요소를 찾습니다. 
여기서는 e.target을 통해 해당 입력 필드에 대한 정보를 가져옵니다.
입력 필드의 name 속성과 value 속성을 추출합니다. 
이 정보들은 입력 필드의 이름과 값에 해당합니다.
setInputValue 함수를 사용하여 inputValue 상태를 업데이트합니다. 
이때, 전개 연산자 ...를 사용하여 기존의 inputValue 객체를 복사하고, 변경된 값을 새로운 객체에 추가합니다. 
이렇게 함으로써 기존의 다른 속성들은 유지하면서 변경된 필드의 값을 업데이트합니다.
즉, 이 함수는 입력 필드의 변경 사항을 감지하여 inputValue상태를 업데이트name 속성을 기반으로 어떤 필드가 변경되었는지를 알고, 그에 해당하는 값을 value속inputValue에 반영합니다. */

    const handleAddCilck = () => {
   
        const student = {
            ...inputValue,
            id: staticId.current += 1

        };
        setStudentList([...studentList, student]);
    }


    const student = {
        ...inputValue,
        id: staticId.current += 1
    }

    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id != id)]);

    }
/*해당 코드는 주어진 ID를 가진 학생을 목록에서 삭제하는 함수입니다. 여기서 `handleDeleteClick` 함수는 다음과 같이 작동합니다:

1. `id` 매개변수는 삭제할 학생의 고유한 ID입니다.
2. `studentList.filter(...)`를 사용하여 `studentList` 배열을 필터링합니다. 여기서 `filter` 함수는 새로운 배열을 반환하는데, 이 배열에는 주어진 조건을 충족하는 요소들만 포함됩니다.
3. `student.id != id` 조건을 사용하여 주어진 ID와 일치하지 않는 학생만을 포함하는 새로운 배열을 생성합니다.
4. `setStudentList` 함수를 사용하여 이 새로운 배열을 `studentList`에 설정하여 해당 학생을 제외한 나머지 학생들로 업데이트합니다.

결과적으로, 이 함수는 주어진 ID를 가진 학생을 학생 목록에서 삭제하는 역할을 합니다.*/


    
    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0])
    }

    const handleUpdateSubmitClick = () => {
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList] // 배열 안에 들어있는 값만 복사를 한다.

        //updateStudentList: ㅏ

        updateStudentList[findIndex] = inputValue;

            setStudentList(updateStudentList);  
            handleCancleClick();
        
        /*if (student.id === updateId) {
                return inputValue; // 수정할 학생의 정보를 새로 입력된 정보로 업데이트
            }
            return student;*/

            /*해당 코드는 수정된 학생 정보를 제출하여 학생 목록을 업데이트하고, 업데이트된 학생 정보를 취소하는 함수인데요, 
            함수명이 `handleUpdateSubmitClick`입니다. 이 함수는 다음과 같이 작동합니다:

1. `findIndex` 변수에는 `studentList` 배열에서 `updateId`와 일치하는 학생의 인덱스를 찾습니다. 
이때 `indexOf` 메서드를 사용하여 해당 학생의 첫 번째 인덱스를 찾습니다.
2. `updateStudentList` 변수에는 `studentList` 배열을 복사합니다. 
이때 전개 연산자 `...`를 사용하여 배열 안에 있는 값들만을 복사합니다.
3. `updateStudentList[findIndex] = inputValue;`를 통해 수정할 학생의 정보를 새로 입력된 정보로 업데이트합니다.
4. `setStudentList(updateStudentList);`를 호출하여 업데이트된 학생 목록을 적용합니다.
5. `handleCancelClick();`을 호출하여 업데이트 상태를 취소하고 입력된 정보를 초기화합니다.

결과적으로, 이 함수는 수정된 학생 정보를 학생 목록에 적용하고 취소 버튼을 눌렀을 때의 동작을 수행합니다. */


    }

    const handleCancleClick = () => {
        setUpdateId(0);
        setInputValue({
            id:"",
            name: "",
            age: 0,
            address: ""
     });
}



  return (
    <div>
        <div>
            <input type="text" name="id" disabled={true} value={inputValue.id} placeholder='ID' />
            <input type="text" name='name' onChange={handleInputChange} value= {inputValue.name}placeholder='이름' />
            <input type="text" name='age' onChange={handleInputChange} value= {inputValue.age}placeholder='나이' />
            <input type="text" name='address' onChange={handleInputChange} value= {inputValue.address}placeholder='주소' />
            <button onClick={handleInputChange}>추가</button>
            
        </div>
        <table>
            <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                    </tr>
            </thead>
            <tbody>
            {studentList.map(student => {
                return <tr key={student.id}> // 중복되지 않는 값만 넣어준다.
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>

                    <td>
                        {
                        
                        updateId == student.id 
                            ? <button onClick={() => {handdleAddCilck(student.id);}}>수정</button>
                            : <button onClick={handleUpdateSubmitClick}>확인</button>
                        }
                    </td>
                    <td>
                        {
                        
                        updateId !== student.id 
                            ? <button onClick={() => {handdleAddCilck(student.id);}}>삭제</button>
                            : <button onClick={handleCancleClick}>취소</button>
                        }
                        </td>
                </tr>
            })}
        </tbody>
        </table>

    </div>
 
  )
}

export default StudentArraypage;