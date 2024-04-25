const SignUp = () => {
    return (
        <>
            <div className="w-50 getStartedForm m-auto">
                <form className="input-group" method="GET">
                    <input type="email" name="email" placeholder="Email address" className="form-control form-control-lg bg-transparent text-white" required />
                    <button type="submit" className="btn btn-danger fw-bold">Get Started &gt;</button>
                </form>
            </div>
        </>
    )
}

export default SignUp