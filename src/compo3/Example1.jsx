import React, { useEffect, useState } from 'react';

const Example1 = () => {
    useEffect(() => {
        console.log('컴포넌트가 마운트 되었습니디.')
},[])
    return (
        <div>
            <h2>예제:마운트 시 콘솔 출력</h2>
        </div>
    );
};

export default Example1;