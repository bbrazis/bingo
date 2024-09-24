import React from 'react'
import Nav from '../components/Nav/Nav'


export default function Suggestions() {
    const [formData, setFormData] = React.useState({ terms: "" })
    const [status, setStatus] = React.useState('idle')
    const [error, setError] = React.useState(null)

    function handleSubmit (e){
        e.preventDefault()
        setStatus('submitting')

    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <Nav />
            <h1>Bingo Suggestion Page</h1>
            <form onSubmit={handleSubmit} className='new-terms-form'>
                <label>Bingo Phrase
                    <input 
                        name='terms'
                        onChange={handleChange}
                        id='terms'
                        type='text'
                        placeholder='new phrase to be added to the database'
                        value={formData.terms}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}