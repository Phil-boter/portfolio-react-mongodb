import { Link } from "react-router-dom";

import "../css/footer.css";

export default function ContactShort() {
    return (
        <>
            <section className="section-main-contact">
                <article>
                    <a
                        href="https://github.com/Phil-boter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="arrow"
                            src="/assets/git.png"
                            alt="github"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/philipp-dawid-759793206/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="arrow"
                            src="/assets/linkedIn.png"
                            alt="linkedIn"
                        />
                    </a>

                    <a href="mailto:philipp_dawid@web.de">
                        <img
                            className="arrow"
                            src="/assets/mail.png"
                            alt="mail"
                        />
                    </a>
                </article>
                <Link to="/contact">
                    <button>get in Contact</button>
                </Link>
            </section>
        </>
    );
}
