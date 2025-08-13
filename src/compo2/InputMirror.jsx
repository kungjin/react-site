import { useState } from "react"

export default function InputMirror(){
     
    const [text,setText] =useState("")

    return(
        <>
        <input type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="입력하시오우"/>
        <p>입려-욱 값: {text}</p>
        
        </>
    )

}