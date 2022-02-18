import React from 'react'
import Rate from '../Rate'
import './Header.css'

const Header = ({ setSearchTitle, setSearchRate, searchRate }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Type movie name to search"
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <Rate rating={searchRate} setSearchRate={setSearchRate} />
        </div>
    )
}

export default Header