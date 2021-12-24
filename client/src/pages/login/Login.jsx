import './login.scss'
import logo from '../../images/twitter.png'
import google from '../../images/google.png'
import apple from '../../images/apple.png'
import { useState, useRef } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../userContext/apiCalls'
import { useContext } from 'react'
import { UserContext } from '../../userContext/userContext'

const Login = ()=>{
   const [showPassword, setShowPassword] = useState(false)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const emailRef = useRef()
   const passwordRef = useRef()

   const { dispatch } = useContext(UserContext)
   const navigate = useNavigate()
   const handleClose = ()=>{
       navigate("/register", {replace: true})
   }

   const handleNext = (e)=>{
       e.preventDefault()
       setEmail(emailRef.current.value)
   }
   const handleLogin = (e)=>{
       e.preventDefault()
       setPassword(passwordRef.current.value)
       userLogin(dispatch, {email, password})
   }
    return(
        <div className="login">
            {!email ? (
                <>
                    <div className="login__wrapper">
                        <CloseOutlinedIcon className="login__wrapper__icon" onClick={handleClose}/>
                        <img className="login__wrapper__logo" src={logo} alt=""/>
                        <span className="login__wrapper__header">Sign in to Twitter</span>
                        <div className="login__wrapper__google">
                            <img src={google} alt="" />
                            <span>Sign in with Google</span>
                        </div>
                        <div className="login__wrapper__apple">
                            <img src={apple} alt="" />
                            <span>Sign in with Apple</span>
                        </div>
                        <span className="or">or</span>
                        <form>
                            <input type="text" placeholder="Phone, email or username" ref={emailRef}/>
                            <button onClick={handleNext}>Next</button>
                        </form>
                        <div className="login__wrapper__forgot">
                            <span>Forgot password?</span>
                        </div>
                        <div className="login__wrapper__bottom">
                            <span>Dont have an account?</span>
                            <span>Sign up</span>
                        </div>
                    </div>
                </>
                ) :(
                <div className="login__wrapper__final">
                    <CloseOutlinedIcon className="close__icon" onClick={handleClose}/>
                    <div className="logoContainer">
                        <img className="login__wrapper__logo" src={logo} alt=""/>
                    </div>
                    <h1>Enter your password</h1>
                    <div className="userInfo">
                        <span>username</span>
                        <span>KwesiDev</span>
                    </div>
                    <div className="login__wrapper__form">
                        <div className="input__container">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" ref={passwordRef}/>
                            {showPassword ? 
                                <VisibilityOffOutlinedIcon className="icon" onClick={()=>setShowPassword(!showPassword)}/>
                            : 
                                <VisibilityOutlinedIcon className="icon" onClick={()=>setShowPassword(!showPassword)}/>
                            }
                        </div>
                        <span className="forgot">Forgot password?</span>
                        <button onClick={handleLogin}>Log in</button>
                    </div>
                    <div className="login__wrapper__bottom">
                        <span>Dont have an account?</span>
                        <span>Sign up</span>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Login