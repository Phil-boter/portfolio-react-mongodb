import { Link } from "react-router-dom";

import "../css/footer.css";

export default function ContactShort() {
    return (
        <>
            <section className="section-main-contact">
                <article>
                    <span
                        className="link-linkedIn"
                        onClick={() =>
                            window.open("https://github.com/Phil-boter")
                        }
                    >
                        <img
                            className="arrow"
                            src="/assets/git.png"
                            alt="github"
                        />
                    </span>

                    <span
                        className="link-linkedIn"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/philipp-dawid-759793206/"
                            )
                        }
                    >
                        <img
                            className="arrow"
                            src="/assets/linkedIn.png"
                            alt="linkedIn"
                        />
                    </span>

                    <span
                        className="link-linkedIn"
                        onClick={() =>
                            window.open("mailto:philipp_dawid@web.de")
                        }
                    >
                        <img
                            className="arrow"
                            src="/assets/mail.png"
                            alt="mail"
                        />
                    </span>
                </article>
                <Link to="/contact">
                    <button>get in Contact</button>
                </Link>
            </section>
        </>
    );
}
