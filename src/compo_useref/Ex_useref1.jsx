import React, { useRef } from 'react';

const Ex_useref1 = () => {

    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <>
        <label style={{cursor: "pointer",fontWeight: 'bold'}}
         onClick={focusInput}>
            이름 입력:
        </label>
        <br />
            <input type="text"
                ref={inputRef} placeholder='여기에 입력' />
           <br />
            <button onClick={focusInput}>
                포커스 주기
            </button>
            

        </>
    );
};

export default Ex_useref1;