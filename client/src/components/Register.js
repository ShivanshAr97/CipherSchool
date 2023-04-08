import axios from 'axios'
import React, { useState } from 'react'
import Loader from './Loader'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [profileMess, setProfileMess] = useState("")
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
            const { data } = await axios.post("/api/login", {
                username, email, password, profilePic
            }, config)

            console.log(data)
            setError("All good")
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)

        } catch (error) {
            setError(error.response.data.message);
            setLoading(false)
        }
    }

    const postDetails = (pics) => {
        if (!pics) {
            return setProfileMess("Please select an image")
        }
        setProfileMess(null)

        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData();
            data.append('file', pics)
            data.append('upload_preset', 'cipher')
            data.append('cloud_name', 'dn2oxlhw7')
            fetch("https://api.cloudinary.com/v1_1/dn2oxlhw7/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setProfilePic(data.url.toString())
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else{
            setProfileMess("Select an image")
        }
    }

    return (
        <>
            {loading && <Loader />}
            {error}
            <form>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <input type="file" accept="image/png, image/jpeg" onChange={(e) => postDetails(e.target.files[0])}/>
                {profileMess}
            </form>
            <button onClick={handleSub}>Register</button>
        </>
    )
}

export default Register