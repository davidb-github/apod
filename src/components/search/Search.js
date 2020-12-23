import React, {useContext} from 'react';
import { ApodContext } from '../photos/PhotoProvider'

const Search = () => {

    const { searchTerm, setSearchTerm } = useContext(ApodContext)

    return (
        <>
            <label for="Search">Search</label>

            <input onChange={e => {
                // console.log("setSearchTerm: ", e.target.value)
                setSearchTerm(e.target.value)}} value={searchTerm} type="text" id="searchTerm" name="Search"/>
        </>
    )
}

export default Search

