import { useState, useEffect } from "react"

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Dashboard ({ token }) {
    const [messages, setMessages] = useState('')
    const [posts, setPosts] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        async function fetchUser() {
            let response = await fetch(`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })

            let result = await response.json()


            console.log(result)
            setMessages(result.data.messages)
            setUsername(result.data.username)
            setPosts(result.data.posts)
        }

        if (token.length !== 0) {
        fetchUser ()
         }
    }, [token])
    
    //     console.log('Token:', token)
    return <div>
        <h3>Hello, {username}</h3>
        <ul>
            <li>Messages: {messages}</li>
            <li>Posts: {posts}</li>
        </ul>
    </div>
    
    }
