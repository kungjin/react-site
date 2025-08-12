import { useState } from "react"



export default function ToggleButton(){
    const [isOn, setIsOn] = useState(false)
    return(
        <>
        <button onClick={() => setIsOn(!isOn)}
        style={{
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer"
      }}>
            
            {isOn ? "ON" : "OFF"}
            버튼
        </button>
        
        
        </>

    )
}