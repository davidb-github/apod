// imports
import React, { useState, useContext, useEffect } from "react"
// import  from 'react'
import { TagContext } from '../tags/TagProvider'

export const Categories = () => {

    const [selectedTag, setSelectedTag] = useState(0)

    const { tags, getTags } = useContext(TagContext)

     // onMount
     useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        console.log("CatPage: selectedTag value: ", selectedTag)

        // if (selectedTag !== 0) {
        //     const subset = 
        // }
    }, [selectedTag])



    // useEffect()
    // useEffect for seletedTag
    // filter photos when it changes
    // copy section from favlist to here


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
        </>
    )
}