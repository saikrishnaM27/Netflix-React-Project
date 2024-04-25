const SignUp = () => {
    return (
        <>
            <div className="w-50 getStartedForm m-auto">
                <form className="input-group" method="POST">
                    <input type="email" name="email" placeholder="Email address" className="form-control form-control-lg bg-transparent text-white" required />
                    <button type="button" className="btn btn-danger fw-bold">Get Started &gt;</button>
                </form>
            </div>
        </>
    )
}

export default SignUp