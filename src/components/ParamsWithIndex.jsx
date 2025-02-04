import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ParamsWithIndex = () => {
    const ARRAY_LIST = [
        {
            title: "This is the First heading"
        },
        {
            title: "This is the Second heading"
        },
        {
            title: "This is the Third heading"
        },
        {
            title: "This is the Fourth heading"
        },
    ]

    const navigate = useNavigate()
    const [active, setActive] = useState()
    const handleClick = (abc) => (
        navigate(`?value-${abc}`),
        setActive(abc)
    )
    return (
        <div>
            {
                ARRAY_LIST.map((obj, i) => (
                    <h2 key={i} onClick={() => handleClick(i + 1)} className={`${active === i + 1 ? "text-red-500" : ""}`}>
                        {obj.title}
                    </h2>
                ))
            }
        </div>
    )
}

export default ParamsWithIndex