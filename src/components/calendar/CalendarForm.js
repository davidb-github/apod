// imports
import React, { useContext, useEffect, useState } from 'react'
import { ApodContext } from "../photos/PhotoProvider"
import { TagContext } from '../tags/TagProvider'
import Card from '../card/Card'


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
        setTimeout(() => { setUserMessage("") }, 2000)
    }

    return (
        <>
            <main className="mainContainer">
            <h1>Astronomy Photo of the Day</h1>
                <article>
                    {/* <h1>Welcome to CalendarForm.js</h1> */}
                    <p>{userMessage && userMessage}</p>

                    <div>
                        {/* calendar input */}
                        <label htmlFor="date">Select a date:</label>

                        <input value={date} type="date" id="date" name="APOD Date" onChange={handleChange}>

                        </input>
                    </div>

                    <Card photo={apodByDate} />

                    <div className="card--actions">
                        <div className="card--actions__tag">
                            {/* tag drop-down */}
                            <label htmlFor="tag-select">Choose a tag:</label><br/>

                            <select value={selectedTag} name="tags" id="tag-select" onChange={(e) => { setSelectedTag(e.target.value) }}>
                                <option value="0">--Choose/Remove tag filters--</option>
                            ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                    {tag.tag}
                                </option>))}
                            </select>
                        </div>

                        <div>
                            {/* Text box */}
                            <label htmlFor="apod-note">Add Note: </label><br/>

                            <textarea value={noteText} id="note" name="note"
                                rows="5" cols="70" onChange={(e) => { setNoteText(e.target.value) }}>
                            </textarea>
                        </div>


                        <div>
                            {/* Save Photo to favorites */}
                            <button onClick={handleSaveFavs}
                                type="button">
                                Save to Favorites
                        </button>
                        </div>
                    </div>

                </article>
            </main>
        </>
    )
}
