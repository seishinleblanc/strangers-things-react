import React from "react";
import { useState } from "react";

export default function LoginForm () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

return <>
    <form onSubmit={handleSubmit}>
        <label>Username:
            <input value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>Password:
            <input value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
    </form>
    </>
}