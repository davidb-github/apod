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
                        <label for="start">Select a date:</label>
                        <input type="date" id="start" name="APOD Date"
                            value="2020-12-10"
                            min="2018-01-01" max="2020-12-31"></input>
                    </div>

                    <div>
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

                        <p>Add tag dropdown</p>
                        <p>Add Note button</p>
                        <p>Add text box</p>
                        <p>Add save button</p>
                    </div>

                    <div>
                        {/* Photo for selected day goes in this div */}
                    </div>
                </article>
            </main>
        </>
    )
}
