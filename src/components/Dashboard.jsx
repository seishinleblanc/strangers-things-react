import { useState, useEffect } from "react"
import { DeletePost } from "./DeletePost"

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Dashboard ({ token }) {
    const [messages, setMessages] = useState('')
    const [posts, setPosts] = useState('')
    const [username, setUsername] = useState('')
    const newPost = Array.from(posts);
    const newMessage = Array.from(messages);

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
    return <>
        <h3>Hello, {username}</h3>
        <h3>Messages: {messages}</h3>
        <div className='messagecard'>
            { newMessage.map((p,index) =>
            <div key={index}>
                <h1>{p.title}</h1>
                <h3>{p.messages}</h3>
                </div>)}
        </div>
        <h3> Posts </h3>
        <div className='postcard'>  
            { newPost.map((p, index) =>
            <div key={index}
            className='posts'>
            <h1>{p.title}</h1>
            <h3>Price: {p.price}</h3>
            <h3>Description: {p.description}</h3>
            <h3>Location: {p.location}</h3>
            <button onClick={DeletePost}>Delete Post</button>
        </div>)
}
</div>
    </>
    
    }
