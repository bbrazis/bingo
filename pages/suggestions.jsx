import React from 'react'
import Nav from '../components/Nav/Nav'
import { sendData, getFullList } from '../data'

export default function Suggestions() {
    const [formData, setFormData] = React.useState({ terms: "" })
    const [status, setStatus] = React.useState('idle')
    const [loading, setLoading] = React.useState(false)
    const [list, setList] = React.useState([])
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        getList()
    },[])
    
    async function getList() {
        setLoading(true)
        try {
            const data = await getFullList()
            setList(Object.values(await data))
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmit (e){
        e.preventDefault()
        if(formData.terms.length > 0){
            setStatus('submitting')
            try {
                sendData(formData)
                setError(null)
            } catch(err) {
                setError(err)
            } finally {
                setList(prev => {
                    [...prev, formData]
                })
                setFormData({ terms: ""})
                setStatus('idle')
                await getList()
            }
        }
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
            {
                error?.message &&
                <h2 className='error-message'>{error.message}</h2>
            }
            <form onSubmit={handleSubmit} className='new-terms-form'>
                <h2>Insert your new Bingo Item</h2>
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
                !loading && list &&
                <details className='list-wrap'>
                    <summary>
                        Full List of Bingo Items
                    </summary>
                    <ul className='list'>
                        {list?.map((item, index) => (
                            <li className='items' key={index}>{item.terms}</li>
                        ))}
                    </ul>
                </details>
            }
        </>
    )
}