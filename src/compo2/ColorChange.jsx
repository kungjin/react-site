import { useState } from "react"

export default function ColorChange(){
         const [color, setColor] =useState("gray")
    return(
        <>
        <h2 style={{color}}>색상 변경</h2>
        <button onClick={() => setColor("red")}>빨강</button>
        <button onClick={() => setColor("pink")}>핑쿠</button>
        <button onClick={() => setColor("yellow")}>노오랑</button>
        <button onClick={() => setColor("green")}>초우록</button>

        </>

    )
}