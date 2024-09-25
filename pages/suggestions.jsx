import React from 'react'
import Nav from '../components/Nav/Nav'
import { sendData, getFullList } from '../data'

export default function Suggestions() {
    const [formData, setFormData] = React.useState({ terms: "" })
    const [status, setStatus] = React.useState('idle')
    const [loading, setLoading] = React.useState(false)
    const [list, setList] = React.useState([])
    const [error, setError] = React.useState(null)

    async function handleSubmit (e){
        e.preventDefault()
        setStatus('submitting')
        try {
            await sendData(formData)
            setError(null)
        } catch(err) {
            setError(err)
        } finally {
            setStatus('idle')
            e.querySelector('#terms').value = ""
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    React.useEffect(() => {
        async function getList() {
            setLoading(true)
            try {
                const data = await getFullList()
                setList(Object.values(await data))
                console.log(list)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
    },[])

    const ListEls = list.map((item, index) => (
        <li className='items' key={index}>{item.terms}</li>
    ))

    return (
        <>
            <Nav />
            <h1>Bingo Suggestion Page</h1>
            {
                error?.message &&
                <h2 className='error-message'>{error.message}</h2>
            }
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
                <button type='submit'>
                    {
                        status === 'submitting'
                            ? "Sending..."
                            : "Submit"
                    }
                </button>
            </form>
            {
                !loading &&
                <div className='list-wrap'>
                    <ul className='list'>
                        {ListEls}
                    </ul>
                </div>
            }
        </>
    )
}