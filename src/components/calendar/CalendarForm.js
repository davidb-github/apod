// imports
import React, { useContext, useEffect } from 'react'
import { TagContext } from '../tags/TagProvider'

// , { useState, useContext, useEffect } 
// import { ApodContext, ApodProvider } from './components/photos/PhotoProvider'
// import { PhotoDetail } from './components/photos/PhotoDetail'

// will make call to apod API and display photo


export const CalendarForm = () => {

    // useContext for any data
    // onMount loads up context, runs jsx, skips useEffects
    const { tags, getTags } = useContext(TagContext)

    // useRef for any data
    // const tag = useRef(null)

    // useEffect for tags? anything else?
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        console.log("useEffect state:", tags)
    }, [tags])

    // function def for savetoFavs




    return (
        <>
            <main>
                <article>
                    <h1>Welcome to CalendarForm.js</h1>
                    <div>
                        {/* calendar input */}
                        <label htmlFor="start">Select a date:</label>
                        <input type="date" id="start" name="APOD Date"
                            defaultValue="2020-12-10"
                            min="2018-01-01" max="2020-12-31"></input>
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

                    <div>
                        {/* Photo for selected day goes in this div */}
                    </div>
                </article>
            </main>
        </>
    )
}
