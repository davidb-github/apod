// imports
import React, { useContext, useEffect, useState } from 'react'
import { ApodContext } from "../photos/PhotoProvider"
import { TagContext } from '../tags/TagProvider'


export const CalendarForm = () => {

    const [date, setDate] = useState("")
    const [selectedTag, setSelectedTag] = useState(0) //? string or int
    const [noteText, setNoteText] = useState("")
    const [userMessage, setUserMessage] = useState("")

    // onMount loads up context, runs jsx, skips useEffects
    const { tags, getTags } = useContext(TagContext)
    const { apod, getApod } = useContext(ApodContext)

    const { apodByDate, getApodByDate } = useContext(ApodContext)
    const { photo, addPhoto } = useContext(ApodContext)
    const { tag, addPhotoTag } = useContext(TagContext)


    // onMount
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getApod()
    }, [])

    // on Change
    // useEffect(() => {
    //     console.log("useEffect state:", tags)
    // }, [tags])

    // useEffect to watch datestate - call getApod by date
    useEffect(() => {
        // console.log(date)
        getApodByDate(date)
    }, [date])

    // extract date from OnChange event and pass to setDate
    const handleChange = (e) => {
        let date = e.target.value
        setDate(date)
    }

    const createPhotoObject = () => {
        const userId = parseInt(localStorage.getItem("app_user_id"))

        return {
            userId: userId,
            noteText: noteText,
            title: apodByDate.title,
            imageUrl: apodByDate.url,
            date: date
        }
        // console.log
    }
    // accept json-server response so photo id is available for the addPhotoTag call
    const handleSaveFavs = () => {
        // console.log(ApodContext)
        addPhoto(createPhotoObject())
            .then(response => addPhotoTag({ photoId: response.id, tagId: parseInt(selectedTag) })).catch(console.log)
        setDate("")
        setSelectedTag(0)
        setNoteText("")
        setUserMessage("Photo Saved")
        setTimeout(() => {setUserMessage("")}, 2000)
    }

    return (
        <>
            <main>
                <article>
                    {/* <h1>Welcome to CalendarForm.js</h1> */}
                    <p>{userMessage && userMessage}</p>

                    <div>
                        {/* calendar input */}
                        <label htmlFor="date">Select a date:</label>

                        <input value={date} type="date" id="date" name="APOD Date" onChange={handleChange}>

                        </input>
                    </div>

                    <div>
                        {/* tag drop-down */}
                        <label htmlFor="tag-select">Choose a tag:</label>

                        <select value={selectedTag} name="tags" id="tag-select" onChange={(e) => { setSelectedTag(e.target.value) }}>
                            <option value="0">--Please choose an option--</option>
                            ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                {tag.tag}
                            </option>))}
                        </select>
                    </div>

                    <div>
                        {/* Text box */}
                        <label htmlFor="apod-note">Add Note: </label>

                        <textarea value={noteText} id="note" name="note"
                            rows="5" cols="33" onChange={(e) => { setNoteText(e.target.value) }}>
                        </textarea>
                    </div>


                    <div>
                        {/* Save Photo to favorites */}
                        <button onClick={handleSaveFavs}
                            // wire up OnClick to call savetoFavs
                            // do I need preventDefault behavior or not?
                            type="button">
                            Save to Favorites
                        </button>
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
                                    {/* {console.log(apodByDate.url)} */}
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
