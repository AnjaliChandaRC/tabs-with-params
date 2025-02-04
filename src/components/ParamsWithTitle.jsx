import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ParamsWithTitle = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState()
    const dummyArray = [
        {
            title: "This is my first heading"
        },
        {
            title: "This is my second heading"
        },
        {
            title: "This is my third heading"
        },
        {
            title: "This is my fourth heading"
        }
    ]
    const clickHandler = (title) => {
        const formattedTitle = title.replace(/\s+/g, '-');
        navigate(`?value=${formattedTitle}`)
        setActive(title)
    }
    return (
        <div> {
            dummyArray.map((obj, index) => {
                return (
                    <h2 className={`${obj.title === active ? "text-[red]" : ""} cursor-pointer`} onClick={() => clickHandler(obj.title)} key={index}>{obj.title}</h2>
                )
            })
        }</div>
    )    
}

export default ParamsWithTitle