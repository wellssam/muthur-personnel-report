import { useRef } from "react";

const SignupModule = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return(
        <div className="signupModal">
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" ref={emailRef}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" ref={passwordRef}/>
                <label htmlFor="passwordConfirm">Confirm Password:</label>
                <input type="password" name="passwordConfirm" ref={passwordConfirmRef}/>
                <div className="buttonWrapper">
                    <button type="submit">Create profile</button>
                </div>
            </form>
        </div>
    )
}

export default SignupModule;