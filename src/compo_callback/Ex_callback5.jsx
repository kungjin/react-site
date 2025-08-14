import React, { useCallback, useEffect, useState } from 'react';

const Ex_callback5 = () => {
    const [count, setCount] = useState(0)
    const handleKeypress = useCallback((e) => {
        if (e.key === "ArrowUp") {
            setCount((prev) => prev + 1);
        } else if (e.key === "ArrowDown") {
            setCount((prev) => prev - 1)
        } else if (e.key === "ArrowLeft") {
            setCount((prev) => prev * 2)
        } else if (e.key === "ArrowRight") {
            setCount((prev) => prev / 2)
        }
    }, [])

    const reset = useCallback(() => setCount(0))

    useEffect(() => {
        window.addEventListener("keydown", handleKeypress)
        return () => {
            window.removeEventListener("keydown", handleKeypress)
            console.log("나가는 거 볼 수 있나?")
        }

    }, [handleKeypress])

    return (
        <>
            <p>↑: +1</p>
            <div style={{display: 'flex',
                alignItems: 'center'
            }}>
                <p style={{margin: '40px'}}> ←: ×2</p>
            <h1 style={{
                border: '2px solid #222',
                borderRadius: '50px',
                padding: '20px'
            }}>Count: {count}</h1>

            <p style={{margin: '40px'}}> →: ÷2</p>
            </div>
            
            
            <p><br /> ↓: -1</p>

            <button style={{margin: '40px',
                backgroundColor: '#f88a8aff'
            }} onClick={reset}>Reset</button>
        </>
    );
};

export default Ex_callback5;