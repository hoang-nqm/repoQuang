import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to)
    })
    return (
        <div></div>
    )
}

export default Redirect