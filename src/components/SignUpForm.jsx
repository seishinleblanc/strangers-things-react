import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        if (errorMsg){
            console.log('Did not send...')
            return
        }

        let response = await fetch(`${BASE_URL}/users/register`,
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

                console.log('-- SENT TO SERVER --')

                let result = await response.json()

                console.log('result:', result)
                setToken(result.data.token)
                navigate('/dash')
            }

            function passwordValidation(event) {
                let passwd = event.target.value
                if (passwd.length <4) {
                    setErrorMsg('Password is too short!')
                } else {
                    setErrorMsg('')
                }

                setPassword(passwd)
            }

    return <div>
    <h1>Sign Up</h1>
    <h2>*You can use any username/password</h2>

    <form onSubmit={handleSubmit}>
        <label>Username:
            <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>Password:
            <input value={password} onChange={passwordValidation} />
        </label>
        {errorMsg && <h3>{errorMsg}</h3>}
        <button>Sign Up</button>
    </form>
    </div>
}