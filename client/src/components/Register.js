import axios from 'axios'
import React, {useState} from 'react'

const Register = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [profilePic,setProfilePic] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSub=async(e)=>{
        e.preventDefault()
        try {
            const config = {
                headers:{
                    "Content-type":"application/json"
                },
            }

            
            setLoading(true)
            const {data} = await axios.post("/api/login",{
                username,email,password,profilePic
            },config)

            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)

        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
            <form>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                <input type="file" accept="image/png, image/jpeg" value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder='picture' />
                <input type="image" src="" alt="" />
            </form>
            <button onClick={handleSub}>Register</button>
        </>
    )
}

export default Register