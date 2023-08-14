import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function MakePost( {token} ) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const navigate = useNavigate()
    const buttonHandler = () => {
        setWillDeliver(current => !current)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`, 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post:{
                        title: title,
                        description: description,
                        price: price,
                        location: location,
                        willDeliver: willDeliver
                    }
                })
            });
            const result = await response.json();
            console.log(result)
            navigate('/dash')
            return result
        } catch(err) {
            console.error(err);
        }
    }
    return <>
    <h2>Sell an Item!</h2>
    <form className="formbox"  onSubmit={handleSubmit}>
        <label>Title:
            <input className="inputbox" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>Description:
            <input className="inputbox" value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label>Price:
            <input className="inputbox" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>Location:
            <input className="inputbox" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <button className="button" onClick={buttonHandler} type="button">Click if willing to deliver </button>
        <button className="button">Submit</button>
    </form>
    </>
}