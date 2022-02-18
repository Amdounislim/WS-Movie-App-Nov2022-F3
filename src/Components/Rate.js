import React from 'react'

const Rate = ({ rating, setSearchRate=()=>{} }) => {

    let Stars = []

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            Stars.push(<span onClick={() => setSearchRate(i + 1)} className="rating" style={{ cursor: "pointer" }}>
                ★
            </span>)
        } else {
            Stars.push(<span onClick={() => setSearchRate(i + 1)} className="rating" style={{ cursor: "pointer" }}>
                ☆
            </span>)
        }
    }

    return (
        <div>{Stars}</div>
    )
}

export default Rate