import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as ActHome from '../redux/ac-home'


export default function Home() {
    const stateHome = useSelector(state => state.Home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ActHome.getData())
    },[])

    return (
        <div>
            Home
        </div>
    )
}