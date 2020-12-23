import React, { useContext, useEffect } from "react"
import { ApodContext } from "./PhotoProvider"


export const PhotoDetail = () => {
    // console.log("PhotoList....")

    // This state changes when `getApod()` is invoked below
    const { apod, getApod } = useContext(ApodContext)


    useEffect(() => {
        getApod()
        // console.log("useEffect state:", apod)
    }, [])


    return (
        <div className="apod">
            {
                <section>
                    <div>
                        <p>Title: {apod.title}</p>
                        <p>Date : {apod.date}</p>
                    </div>
                    <div>
                        <img src={apod.url} alt="apod"></img>
                        {/* {console.log(apod.url)} */}
                    </div>
                    <div>
                        <p>Description: {<br />} {apod.explanation}</p>
                    </div>
                </section>
            }
        </div >
    )
}
