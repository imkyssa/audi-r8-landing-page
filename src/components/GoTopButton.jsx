import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
const GoTopButton = ({ goToTop }) => {
    return (
        <button onClick={goToTop} className='gotop'>
            <AiOutlineArrowUp />
        </button>
    )
}

export default GoTopButton