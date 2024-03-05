import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import { useCallback, useState } from 'react';

function App() {

  const [title, setTitle] = useState(""); // 상태가 변하면 해당 컴포넌트는 변한다.
  const [content, setContent ] = useState("");
   // 변수,함수  상태는 다시 랜더링이 되도 대입이 안된다.

  const modules = {

  };

  const handleTitleChange = useCallback((e) => {
    setTitle (() => e.target.value);
  }, []);

  const handleQuillChange = useCallback((value) => {
    setContent = value;
  
  }, []);

  console.log(content);
  
  return (
    <>
    <input type="text" onChange={handleTitleChange}/>
    <ReactQuill modules={modules} onChange={handleQuillChange} />

    </>
    
  );
}


    [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']  
                                                          // remove formatting button
    ];



     // 옵션들이 사라짐
 

export default App;
