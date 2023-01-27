import React, { useState } from 'react'

const Comp1 = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            setNum(0);
            alert("Number can't be down to zero ");
        }
    }
    return (
        <>
            <div className='Container1'>
                <div className='Container2'>
                    <h1>{num}</h1>
                    <div className='Container3'>
                        <button onClick={incNum}>Increm</button>
                        <button onClick={decNum}>Decrem</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comp1;
