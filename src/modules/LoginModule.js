const LoginModule = () => {
    return(
        <div className="loginModal">
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <div className="buttonWrapper">
                    <button type="submit">Enter</button>
                    <button>New User?</button>
                </div>
            </form>
        </div>
    )
}

export default LoginModule;