import { useState } from "react";

export function useInput() {
    const [inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
         const {value} = e.target;
             setInputValue (() => value); // iv >> 매개 변수.
 }
        return [inputValue, onChange ];
}

export function useMaxValueValidateInput(maxSize) {

    const [inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
    }
    return [inputValue, onChange ];
}