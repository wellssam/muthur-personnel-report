const SignupModule = () => {
    return(
        <div className="signupModal">
            <form>
                <label htmlFor="username">Email:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <label htmlFor="passwordConfirm">Confirm Password:</label>
                <input type="password" name="passwordConfirm" />
                <div className="buttonWrapper">
                    <button type="submit">Create profile</button>
                </div>
            </form>
        </div>
    )
}

export default SignupModule;