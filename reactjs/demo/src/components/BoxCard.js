import React from 'react'
import { useState } from 'react'
import './BoxCard.css'

const BoxCard = ({result, children}) => {

    const [show, setShow] = useState(true);

    return (
        <div className={show ? '' : 'hidden'}>
            <div className={`box ${result}`}>
                {children}
                <button className='trigger' onClick={() => setShow(false)}>
                    Masquer</button>
            </div>
        </div>
    )
}

export default BoxCard