import React from 'react'
import Bingo from './Bingo'

function BingoSquare({text, checked, toggleSquare}){
    return (
        <div className={`square${checked?" selected":""}`}>
            {text}
            <button className="clickable" onClick={toggleSquare}>
                <p className="visually-hidden">{text}</p>
            </button>
        </div>
    )
}

export default React.memo(BingoSquare)