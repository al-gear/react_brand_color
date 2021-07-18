import React, { useContext } from 'react';
import { GoSearch } from "react-icons/go";
import MainContext from './context/MainContext';


const Search = () => {
    const { search, setSearch } = useContext(MainContext);

    return (
        <div className="search">
            <div className="icon">
                <GoSearch />
            </div>
            <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Search Brands" />
        </div>
    )
}

export default Search
