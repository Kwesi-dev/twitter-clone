import './login.scss'
import logo from '../../images/twitter.png'
import google from '../../images/google.png'
import apple from '../../images/apple.png'
import { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
const Login = ()=>{
   const [showPassword, setShowPassword] = useState(false)
   const username = true
    return(
        <div className="login">
            {!username ? (
                <>
                    <div className="login__wrapper">
                        <CloseOutlinedIcon className="login__wrapper__icon"/>
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
                            <input type="text" placeholder="Phone, email or username"/>
                            <button>Next</button>
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
                    <CloseOutlinedIcon className="close__icon"/>
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
                            <input type={showPassword ? "text" : "password"} placeholder="Password"/>
                            {showPassword ? 
                                <VisibilityOffOutlinedIcon className="icon" onClick={()=>setShowPassword(!showPassword)}/>
                            : 
                                <VisibilityOutlinedIcon className="icon" onClick={()=>setShowPassword(!showPassword)}/>
                            }
                        </div>
                        <span className="forgot">Forgot password?</span>
                        <button>Log in</button>
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