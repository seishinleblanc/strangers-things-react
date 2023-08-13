import { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



// export default function LoginPage() {
//     return (
//       <div>
//         <h1>Login Page</h1>
//         <LoginForm />
//       </div>
//     );
//   }
  
export default function Login( {setToken} ) {
    const [ successMessage, setSuccessMessage ] = useState(null)
    const [ error, setError ] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(event) {
      event.preventDefault()
        try {
            let response = await fetch(`${BASE_URL}/users/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                    }
                })
            })
            let responseData = await response.json()

            console.log('log in test')

            // setSuccessMessage(`Hello, ${responseData.data.username}`)
            setToken(responseData.data.token)
            navigate('/dash')
        } catch (error) {
            setError(error.message);
        }
      }

      return <div>
    <form onSubmit={handleSubmit}>
        <label>Username:
            <input value={username} onChange={event => setUsername(event.target.value)} />
        </label> 
        <label>Password:
            <input value={password} onChange={event => setPassword(event.target.value)} />
        </label>
     { (successMessage) ? <p>{successMessage}</p> : <></>}
    
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
        <button>Log In</button>
        <div>Don't have an account? <Link to="/signup"> Sign Up </Link> </div>
    </form>
    </div>
}
    
      //   return (
      //     <div>
      //       <h1>Login Page</h1>
      //       <LoginForm />
      //     </div>
      //   );
      // }

    // return <>
    // <h2>Authenticate</h2>
    // <button onClick={handleClick}>Authenticate Token!</button>
    // </>

