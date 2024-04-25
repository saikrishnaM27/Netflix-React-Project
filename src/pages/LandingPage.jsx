import BGImagePage from "../components/BGImagePage"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section1 from "../components/Section1"
import SeperationLine from "../components/SeperationLine"
import Section4 from "../components/Section4"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

const LandingPage = () => {
    return (
        <>
            <BGImagePage />
            <SeperationLine />
            <div className="bg-black text-white">
                <div className="sections">
                    <Section1 />
                    <SeperationLine />
                    <Section2 />
                    <SeperationLine />
                    <Section3 />
                    <SeperationLine />
                    <Section4 />
                    <SeperationLine />
                    <FAQ />
                    <SeperationLine />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default LandingPage