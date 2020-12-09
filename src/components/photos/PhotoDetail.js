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
                    </div>
                    <div>
                        <p>Description: {apod.explanation}</p>
                    </div>
                </section>
                // console.log("PhotoList executed and we are inside the return", apod.title) && <h1>Hello World</h1>
            }
        </div >
    )
}

{/* <section className="apod__photo-details">
                    <article className="apod__title">
                        <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                    </article>
                    <img src={apod.hdrurl} alt="apod"></img>
                    <p>img URL {apod.hdrurl}: </p>
                    <p>

                        {/* copyright: {apod.copyright} */}
                        // date: {apod.date}
                        // explanation: {apod.explanation}

                        // hdrurl: {apod.hdrurl}
                        // media_type: {apod.media_type}
                        // service_version: {apod.service_version}
                        // title: {apod.title}
                //         URL: {apod.url}
                //     </p>

                // </section> */}