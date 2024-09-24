import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav/Nav'


function App() {
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />) 