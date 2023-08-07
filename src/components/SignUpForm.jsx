import { useState } from "react";

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function SignUpForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] =  useState('')
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch (`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/users/register`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: {
                    username: username,
                    password: password
                    }
                })
            })

        const data = await response.json()
        console.log(data)

        setToken(data.token)

        setUsername('')
        setPassword('')

        } catch(err){
            setError(err)
        }
    }

    return <>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
        <label>Username:
            <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>Password:
            <input value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button>Sign Up</button>
    </form>
    </>
}