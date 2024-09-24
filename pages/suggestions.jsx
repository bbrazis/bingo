import React from 'react'
import Nav from '../components/Nav/Nav'


export default function Suggestions() {
    return (
        <>
            <h1>Bingo Suggestion Page</h1>
            <form>
                <label>Bingo Phrase
                    <input type='text' id='phrase-input' />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <Nav />
        </>
    )
}