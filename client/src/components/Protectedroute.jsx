import React from 'react'
import { useAppcontext } from '../context/appcontext'
import { Navigate } from 'react-router-dom'


const Protectedroute = ({children}) => {

    const {user} = useAppcontext()

    if(!user){
        return <Navigate to="/" />
    }

    return children
}

export default Protectedroute