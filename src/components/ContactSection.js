export default function ContactSection() {
    return (
        <>
            <section className="section section-contact">
                <article>
                    Find my code and my latest projects on{" "}
                    <a
                        className="link-github"
                        href="https://github.com/Phil-boter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>{" "}
                    . If you are interested in my educational background and
                    professional experience visit my{" "}
                    <a
                        className="link-linkedIn"
                        href="https://www.linkedin.com/in/philipp-dawid-759793206/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    profile or download my{" "}
                    <a
                        href="/assets/CV-ENG.pdf"
                        download="CV Philipp Dawid"
                        target="_blank"
                        rel="noreferrer"
                        className="link-cv"
                    >
                        CV
                    </a>{" "}
                    . Interested in working with me? Feel free to{" "}
                    <a
                        className="link-mailto"
                        href="mailto:philipp_dawid@web.de"
                    >
                        reach out
                    </a>
                    .
                </article>
            </section>
        </>
    );
}
