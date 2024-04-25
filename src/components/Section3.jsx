const Section3 = () => {
    return (
        <>
            <div className="sectionContent d-flex justify-content-center align-items-center">
                <div>
                    <div className="section-headline fs-1 fw-bold">Enjoy on your TV</div>
                    <p className="fs-4 text-break">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="video">
                    <img src="public/assets/tv.png" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay muted loop></video>
                </div>
            </div>
        </>
    )
}

export default Section3