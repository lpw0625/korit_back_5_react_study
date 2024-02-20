import React from "react";

function InfoInput({name, onChange,value,placeholder, inputRef }) {
 const inputRef = useRef();

 console.log(inputRef.current.name);
    return (
        <input type="text" 
            name={name}
            onChange={onChange} 
            value={value}
            placeholder={placeholder}
            ref={inputRef}/>
     
    );
}

export default InfoInput;