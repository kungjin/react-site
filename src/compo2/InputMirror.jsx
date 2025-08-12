import { useState } from "react"

export default function InputMirror(){
     
    const [text,setText] =useState("")

    return(
        <>
        <input type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="입력하시든가"/>
        <p>입력홀릿 값: {text}</p>
        
        </>
    )

}