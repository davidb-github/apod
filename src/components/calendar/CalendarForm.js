// imports
import { getDefaultNormalizer, getNodeText } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { ApodContext } from "../photos/PhotoProvider"
import { TagContext } from '../tags/TagProvider'


// , { useState
// import { ApodContext, ApodProvider } from './components/photos/PhotoProvider'
// import { PhotoDetail } from './components/photos/PhotoDetail'

// will make call to apod API and display photo
// add usestatee keep track of date



export const CalendarForm = () => {

    const [date, setDate] = useState(0)



    // onMount loads up context, runs jsx, skips useEffects
    const { tags, getTags } = useContext(TagContext)

    const { apod, getApod } = useContext(ApodContext)
    const {apodByDate, getApodByDate} = useContext(ApodContext) 

    // onMount
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getApod()
    }, [])

    // 
    useEffect(() => {
        console.log("useEffect state:", tags)
    }, [tags])

    // useEffect to watch datestate - call getApod by date
    useEffect(() => {
        console.log(date)
        getApodByDate(date)
    }, [date])

    // extract date from OnChange event and pass to setDate
    const handleChange = (e) => {
        let date = e.target.value
        setDate(date)
    }

    return (
        <>
            <main>
                <article>
                    <h1>Welcome to CalendarForm.js</h1>
                    <div>
                        {/* calendar input */}
                        <label htmlFor="date">Select a date:</label>

                        <input type="date" id="date" name="APOD Date" onChange={handleChange}>

                        </input>
                    </div>

                    <div>
                        {/* tag drop-down */}
                        <label htmlFor="tag-select">Choose a tag:</label>

                        <select name="tags" id="tag-select">
                            <option value="0">--Please choose an option--</option>
                            ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                {tag.tag}
                            </option>))}
                        </select>
                    </div>

                    <div>
                        {/* Text box */}
                        <label htmlFor="apod-note">Add Note: </label>

                        <textarea id="note" name="note"
                            rows="5" cols="33">
                        </textarea>
                    </div>

                    <div>
                        {/* Add Note button */}
                        <button
                            type="button">
                            Save Note
                        </button>
                    </div>

                    <div>
                        {/* Save Photo to favorites */}
                        <button
                            // wire up OnClick to call savetoFavs
                            // do I need preventDefault behavior or not?
                            type="button">
                            Save to Favorites
                        </button>
                    </div>

                    <div>

                    </div>

                    {/* Photo for selected day goes in this div */}
                    <div className="apod">
                        {
                            <section>
                                <div>
                                    <p>Title: {apodByDate.title}</p>
                                    <p>Date : {apodByDate.date}</p>
                                </div>
                                <div>
                                    <img src={apodByDate.url} alt="apod"></img>
                                    {console.log(apodByDate.url)}
                                </div>
                                <div>
                                    <p>Description: {apodByDate.explanation}</p>
                                </div>
                            </section>
                            // console.log("PhotoList executed and we are inside the return", apod.title) && <h1>Hello World</h1>
                        }
                    </div >
                </article>
        </main>
        </>
    )
}
