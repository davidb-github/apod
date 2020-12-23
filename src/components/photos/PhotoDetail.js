import React, { useContext, useEffect } from "react"
import { ApodContext } from "./PhotoProvider"
import Card from '../card/Card'


export const PhotoDetail = () => {
    // console.log("PhotoList....")

    // This state changes when `getApod()` is invoked below
    const { apod, getApod } = useContext(ApodContext)


    useEffect(() => {
        getApod()
        // console.log("useEffect state:", apod)
    }, [])


    return (
        < Card photo ={apod}/>
    )
}
