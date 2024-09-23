import React from 'react'
import Bingo from './index'

export default function BingoRow({options}) {
    
    return (
        <>
            <Bingo.Square />
            <Bingo.Square />
            <Bingo.Square />
            <Bingo.Square />
            <Bingo.Square />
        </>
    )
}