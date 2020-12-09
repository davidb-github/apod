import React, { useContext, useEffect } from "react"
import { ApodContext } from "./PhotoProvider"


export const PhotoDetail = () => {
    // console.log("PhotoList....")

    // This state changes when `getApod()` is invoked below
    const { apod, getApod } = useContext(ApodContext)


    useEffect(() => {
        console.log("useEffect state:", apod)
        getApod()
    }, [])


    return (
        <div className="apod">
            {
                <section className="apod__photo-details">
                    <article className="apod__title">
                        <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                    </article>
                    <img src={apod.hdrurl} alt="apod"></img>
                    <p>img URL {apod.hdrurl}: </p>
                    <p>

                        {/* copyright: {apod.copyright} */}
                        date: {apod.date}
                        explanation: {apod.explanation}

                        hdrurl: {apod.hdrurl}
                        media_type: {apod.media_type}
                        service_version: {apod.service_version}
                        title: {apod.title}
                        URL: {apod.url}
                    </p>

                </section>
                // console.log("PhotoList executed and we are inside the return", apod.title) && <h1>Hello World</h1>



            }
        </div >
    )
}

// {
//             apod.copyright,
//             apod.date,
//             apod.explanation,
//             apod.hrurl,
//             apod.media_type,
//             apod.service_version,
//             apod.title,
//             apod.url
// }