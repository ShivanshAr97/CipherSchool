import axios from 'axios'
import React, { useState } from 'react'
import Loader from './Loader'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSub = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            }


            setLoading(true)
            const { data } = await axios.post("/api/register", {
                email, password
            }, config)

            console.log(data);
            setError("All good")
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)

        } catch (error) {
            setError(error.response.data.message);
            setLoading(false)
        }
    }

    return (
        <>
        {loading && <Loader/>}
            {error}
            <form>
                <input type="email" placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>
            <button onClick={handleSub}>Loginfhfhfhh</button>
        </>
    )
}

export default Login