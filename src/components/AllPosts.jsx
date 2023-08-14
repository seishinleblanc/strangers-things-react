import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function AllPosts () {
    const [ allPosts, setAllPosts ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`)
                const data = await response.json()

                setAllPosts(data.data.posts)

            } catch (err) {
                console.log('An error occured while fetching items', err)
            }
        }
        fetchData()
    }, [])

    console.log(allPosts)

    return <>
    <div className='card'>
        { allPosts.map((p, index) =>
            <div key={index}
                className='posts'
                onClick={() => navigate(`/${p.title}`)}>
                <h1>{p.title}</h1>
                <h3>Seller: {p.author.username}</h3>
                <h3>Price: {p.price}</h3>
            </div>)
    }
    </div>
    </>
}