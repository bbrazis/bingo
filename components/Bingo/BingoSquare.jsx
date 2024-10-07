import React from 'react'

export default function BingoSquare({text, checked, toggleSquare}){
    return (
        <div className={`square${checked?" selected":""}`}>
            {text}
            <button className="clickable" onClick={toggleSquare}>
                <p className="visually-hidden">{text}</p>
            </button>
        </div>
    )
}