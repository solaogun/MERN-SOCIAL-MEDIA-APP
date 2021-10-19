import { useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './register.css'

export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault()
        // console.log(e.current.value)
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Password do not match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user)
                history.push("/login")
            } catch (err) {
                console.log(err)
            }

        }
    }
    return (
        <div className='loginContainer'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">Connect with Friends and the world around you on Lamasocial</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" className="loginInput" type="username" required ref={username} />
                        <input placeholder="Email" className="loginInput" type="email" required ref={email} />
                        <input placeholder="Password" className="loginInput" type="password" required ref={password} />
                        <input placeholder="Password Again" className="loginInput" type="password" required ref={passwordAgain} />
                        <button className="loginButton" type="submit">Sign Up</button>
                        {/* <span className="loginForget">Forget Password</span> */}
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
