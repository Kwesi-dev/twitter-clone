import "./register.scss"
import twitterwhite from '../../images/twitterwhite.png'
import twitter from '../../images/twitter.png'
import apple from '../../images/apple.png'

const Register = () => {
    return (
        <div className="register">
            <div className="left">
                <img src={twitterwhite} alt="" />
            </div>
            <div className="right">
                <div className="right__wrapper">
                    <img src={twitter} alt="" className="logo" />  
                    <span className="firstHeader">Happening now</span>
                    <span className="secondHeader">Join Twitter today.</span>
                    <div className="apple__signin">
                        <img src={apple} alt="" />
                        <span>Sign in with Apple</span>
                    </div>
                    <span className="or">or</span>
                    <button className="registerBtn">
                        sign up with phone or email
                    </button>
                    <p className="privacy">By signing up, you agree to the
                    <b> Terms of Service</b> and <b>Privacy Policy</b>, including <b>Cookie Use</b>
                    </p>
                    <span className="footer__header">Already have an account?</span>
                    <button className="loginBtn">Sign in</button>
                </div>
            </div>    
        </div>
    )
}

export default Register
