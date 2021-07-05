export default function ContactSection() {
    return (
        <>
            <section className="section section-contact">
                <article>
                    Find my code and my latest projects on{" "}
                    <span
                        className="link-github"
                        onClick={() =>
                            window.open("https://github.com/Phil-boter")
                        }
                    >
                        Github
                    </span>{" "}
                    . If you are interested in my educational background and
                    professional experience visit my{" "}
                    <span
                        className="link-linkedIn"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/philipp-dawid-759793206/"
                            )
                        }
                    >
                        LinkedIn
                    </span>{" "}
                    profile or download my{" "}
                    <span
                        className="link-cv"
                        onClick={() => window.open("/assets/CV-ENG.pdf")}
                    >
                        CV
                    </span>{" "}
                    . Interested in working with me? Feel free to{" "}
                    <span
                        className="link-mailto"
                        onClick={() =>
                            window.open("mailto:philipp_dawid@web.de")
                        }
                    >
                        reach out
                    </span>
                    .
                </article>
            </section>
        </>
    );
}
