import './simpleRegister.scss'
import twitter from '../../images/twitter.png'
import { axiosInstance } from '../../requests'
import { useState } from 'react'
import  { useNavigate } from 'react-router-dom'
const SimpleRegister = () => {
    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()
    const newUser = {
        username,
        password,
        email,
        fullname
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            await axiosInstance.post("auth/register", newUser)
            setSuccess(true)
            navigate("/login")
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="simpleRegister">
            <div className="wrapper">
                <div className="imgContainer">
                    <img src={twitter} alt="" className="sRlogo" />
                </div>
                <form>
                    <input type="text" placeholder="username" name="username" onChange={e=>setUsername(e.target.value)}/>
                    <input type="text" placeholder="fullname" name="fullname" onChange={e=>setFullname(e.target.value)}/>
                    <input type="email" placeholder="your email" name="email" onChange={e=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="password" name="password" onChange={e=>setPassword(e.target.value)}/>
                    <button onClick={handleSubmit}>register</button>
                </form>
                {success && 
                    <span className="success">registration successfully done</span>
                }
                {error && 
                    <span className="error">error, registration unsuccessfull</span>
                }
            </div>
        </div>
    )
}

export default SimpleRegister
