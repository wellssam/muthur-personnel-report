import {useRef} from "react";

const LoginModule = () => {

    const emailRef = useRef()
    const passwordRef = useRef() 

    return(
        <div className="loginModal">
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" ref={emailRef}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" ref={passwordRef}/>
                <div className="buttonWrapper">
                    <button type="submit">Enter</button>
                    <button>New User?</button>
                </div>
            </form>
        </div>
    )
}

export default LoginModule;