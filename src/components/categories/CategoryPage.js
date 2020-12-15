// imports
import { useState, useContext, useEffect } from "react"
import React from 'react'
import { TagContext } from '../tags/TagProvider'
// , { useState, useContext, useEffect } 



// will make call to apod API and display photo


export const Categories = () => {

    const [selectedTag, setSelectedTag] = useState(0)

    const { tags, getTags } = useContext(TagContext)

     // onMount
     useEffect(() => {
        getTags()
    }, [])

    // useEffect for seleted tag
    // filter photos when it changes

    return (
        <>
            <main>
            <h1>CategoryPage.js will show the categories drop-down and search bar</h1>
            <p>build additional home components</p>
            <div>
                        {/* tag drop-down */}
                        <label htmlFor="tag-select">Choose a tag:</label>

                        <select name="tags" id="tag-select" onChange={(e) =>{setSelectedTag(e.target.value)}}>
                            <option value="0">--Please choose an option--</option>
                            ${tags.map(tag => (<option key={tag.id} value={tag.id}>
                                {tag.tag}
                            </option>))}
                        </select>
                    </div>

            </main>
            {/* call FavoritesList form here later */}
            {/* <ApodProvider>
                <FavoritesList />
            </ApodProvider> */}

        </>
    )
}