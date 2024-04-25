import ChooseLang from "./ChooseLang"
import SignUp from "./SignUp"

const BGImagePage = () => {
    return (
        <>
            <div className="BGImage BGHeight">
                <div className="BGCover BGHeight">
                </div>
                <div className="BGCoverContent BGHeight">
                    <div className="container TopBar d-flex justify-content-between align-items-center mt-3">
                        <div className="">
                            <h1 className="text-danger">NETFLIX</h1>
                        </div>
                        <div className="w-25 d-flex justify-content-around   align-items-center">
                            <ChooseLang />
                            <button className="btn btn-danger ms-1">SignIn</button>
                        </div>
                    </div>
                    <div className="main-headline container fs-1 d-flex flex-column align-items-center justify-content-center">
                        <div className="headline text-center text-white my-3">
                            <div className="fw-bold"><p>The biggest Indian hits. The best Indian stories. All streaming here.</p></div>
                            <div className="fs-4"><p>Watch anywhere. Cancel anytime.</p></div>
                            <div className="fs-5 mb-3">Ready to watch? Enter your email to create or restart your membership.</div>
                            <SignUp />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BGImagePage