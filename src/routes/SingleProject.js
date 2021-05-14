import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getSingleProject } from "../redux/actions";

import Navigation from "../components/Navigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import SingleProjectImage from "../components/SingleProjectImage";

import "../css/singleProject.css";

export default function SingleProject({ projectId, setIsVisible, visible }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const project = useSelector((state) => {
        return state.singleProject;
    });

    const initialState = {
        header: "",
        header2: "",
        sectionHeader: "",
        location: "singleProjects",
        links: [
            {
                id: 0,
                text: "Home",
                page: "/",
            },
            {
                id: 1,
                text: "Projects",
                page: "/projects",
            },
        ],
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(false);
        dispatch(getSingleProject(projectId));
    }, [projectId, setIsVisible, dispatch]);

    return (
        <>
            <Navigation
                initialState={initialState}
                setIsVisible={setIsVisible}
                visible={visible}
            />
            {project && (
                <>
                    <div className="article-image-container">
                        <img
                            className="article-image modal-image"
                            id="article-image"
                            src={project.image}
                            alt="project mainpage"
                        />
                    </div>
                    <section className="single">
                        <div className="single-project-header-container">
                            <span className="single-project-header">
                                {project.title}
                            </span>
                            <br></br>
                            {project.title_second ? (
                                <span className="single-project-header title2">
                                    {project.title_second}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <article>
                            <div className="article-content description">
                                <p className="article-body">
                                    {project.description}
                                </p>
                            </div>
                            <div className="content-image-container">
                                {project.images &&
                                    project.images.map((image) =>
                                        image
                                            .map((item, index) => (
                                                <SingleProjectImage
                                                    item={item}
                                                    key={index}
                                                />
                                            ))
                                            .slice(0, 3)
                                    )}
                            </div>
                            <div className="article-content description">
                                {/* <h4 className="article-headline"></h4> */}
                                <p className="article-body">
                                    {project.technology}
                                </p>
                            </div>
                            <div className="content-image-container">
                                {project.images &&
                                    project.images.map((image) =>
                                        image
                                            .map((item, index) => (
                                                <SingleProjectImage
                                                    item={item}
                                                    key={index}
                                                />
                                            ))
                                            .slice(3, 7)
                                    )}
                            </div>

                            <div className="article-content description">
                                <p className="article-body">
                                    You can also look at the code belonging to
                                    the app on{" "}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                    .
                                </p>
                            </div>
                            {project.host && (
                                <div className="article-content">
                                    <p className="article-body">
                                        It is possible to try out the app live{" "}
                                        <a
                                            href={project.host}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            here
                                        </a>
                                        .
                                    </p>
                                </div>
                            )}
                        </article>

                        <button onClick={() => history.goBack()}>back</button>
                    </section>
                </>
            )}
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
