// imports
import React from 'react'
// , { useState, useContext, useEffect } 
// import { ApodContext, ApodProvider } from './components/photos/PhotoProvider'
// import { PhotoDetail } from './components/photos/PhotoDetail'

// will make call to apod API and display photo


export const CalendarForm = () => {

    return (
        <>
            <main>
                <article>
                    <h1>Welcome to CalendarForm.js</h1>
                    <div>
                        {/* calendar input */}
                        <label for="start">Select a date:</label>
                        <input type="date" id="start" name="APOD Date"
                            value="2020-12-10"
                            min="2018-01-01" max="2020-12-31"></input>
                    </div>

                    <div>
                        {/* tag drop-down */}
                        <label for="tag-select">Choose a tag:</label>

                        <select name="tags" id="tag-select">
                            <option value="">--Please choose an option--</option>
                            <option value="favorite">Favorite</option>
                            <option value="planet">Planet</option>
                            <option value="moon">Moon</option>
                            <option value="constellation">Constellation</option>
                            <option value="solar system">Solar system</option>
                        </select>
                    </div>

                    <div>
                        {/* Text box */}
                        <label for="apod-note">Add Note: </label>

                        <textarea id="note" name="note"
                            rows="5" cols="33">
                            note text...
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
