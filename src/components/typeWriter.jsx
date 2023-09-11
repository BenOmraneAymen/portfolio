import { useEffect, useState } from "react";



export default function TypeWriter({delay, text}){
    const [arrayIndex, setArrayIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState(" ");

    useEffect(() => {
        setTimeout(() => {
            if(index < text[arrayIndex].length){
                setIndex(index + 1);
            }
        }, delay);
        if(text[arrayIndex].endsWith(currentText)){
            setIndex(0);
            if(arrayIndex > 0){
                setCurrentText(text[arrayIndex-1]);
            }else{
                setCurrentText(text[text.length - 1]);
            }
            if(arrayIndex < text.length - 1){
                setArrayIndex(arrayIndex + 1);
            }else{
                setArrayIndex(0);
            }
        }
    }
    , [currentText]);

    useEffect(() => {
        setCurrentText(text[arrayIndex].slice(0, index));
    }
    , [index]);

    return (
        <span className="font-medium">{currentText}</span>
    );
}