import ChooseLang from "./ChooseLang"

const Footer = () => {
    return (
        <>
            <footer className="my-5 w-75 m-auto text-secondary fw-medium">
                <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li><a href="https://help.netflix.com/support/412">Faq</a></li>
                            <li><a href="https://ir.netflix.com/">Investor Relations</a></li>
                            <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                            <li><a href="https://fast.com/">Speed Test</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><a href="https://help.netflix.com/">Help Centre</a></li>
                            <li><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
                            <li><a href="https://www.netflix.com/in/#">Cookie Preferences</a></li>
                            <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><a href="https://www.netflix.com/youraccount">Account</a></li>
                            <li><a href="https://www.netflix.com/watch">Ways to Watch</a></li>
                            <li><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                            <li><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><a href="https://media.netflix.com/">Media Centre</a></li>
                            <li><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                            <li><a href="https://help.netflix.com/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="chooseLang w-25">
                    <ChooseLang />
                </div>
                <p>Netflix India</p>
            </footer>
        </>
    )
}

export default Footer