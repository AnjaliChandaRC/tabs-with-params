import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LearnQueryParams = () => {
    const [paramsValue, setParamsValue] = useState(null)
    const navigate = useNavigate()

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

    const clickHandler = (iabc) => {
        navigate(`?value=${iabc}`)
        setParamsValue(iabc)
        console.log("paramsValueparamsValue", paramsValue)
    }

    useEffect(() => {
        console.log("hello")
    }, [paramsValue])
    return (
        <>
            {
                dummyArray.map((obj, index) => {
                    return (
                        <h2 className={`${obj.title === paramsValue ? 'text-[red]' : ''}`} onClick={() => clickHandler(obj.title)} key={index}>{obj.title}</h2>
                    )
                })
            }
        </>
    )
}

export default LearnQueryParams