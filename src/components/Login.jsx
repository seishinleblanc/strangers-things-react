import { useState } from "react";
import LoginForm from "./LoginForm";

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function LoginPage() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm />
      </div>
    );
  }
  
// export default function Login( {token} ) {
//     const [ successMessage, setSucessMessage ] = useState(null)
//     const [ error, setError ] = useState(null)
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     async function handleClick() {
//         try {
//             const response = await fetch(`${BASE_URL}/users/login`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     user: {
//                         username: username,
//                         password: password,
//                     }
//                 })
//             })
//             const responseData = await response.json()

//             setSuccessMessage(`Hello, ${responseData.data.username}`)
//         } catch (error) {
//             setError(error.message);
//         }
//     }

//     return <>
//     <h2>Authenticate</h2>
//     { (successMessage) ? <p>{successMessage}</p> : <></>}

//     {successMessage && <p>{successMessage}</p>}
//     {error && <p>{error}</p>}
//     <button onClick={handleClick}>Authenticate Token!</button>
//     </>
// }
