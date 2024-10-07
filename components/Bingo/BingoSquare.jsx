import React from 'react'

export default function BingoSquare({text, checked}){
    // const [selected, setSelected] = React.useState(false)
    
    // function toggleSquare(){
    //     setSelected(prev => !prev)
    // }
    
    return (
        <div className={`square${checked?" selected":""}`}>
            {text ? text : "Free Space"}
            <button className="clickable" onClick={toggleSquare}>
                <p className="visually-hidden">{text ? text : "Free Space"}</p>
            </button>
        </div>
    )
}