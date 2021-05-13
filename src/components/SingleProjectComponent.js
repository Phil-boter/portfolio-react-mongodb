import { Link } from "react-router-dom";

import "../css/projectSection.css";

export default function SingleProjectComponent({ project, index }) {
    return (
        <>
            <article className="article-main-container">
                <img
                    className="article-image-list"
                    id="article-image"
                    src={project.image}
                    alt=""
                />
                <div className="article-main-header">
                    <h1 className="article-header">{project.title}</h1>
                    {project.title_second ? (
                        <h1 className="article-header title2">
                            {project.title_second}
                        </h1>
                    ) : (
                        <></>
                    )}
                </div>
                <Link
                    to={`/singleProject/${project._id}`}
                    className="toggle-link"
                >
                    <button>Click for more Information</button>
                </Link>
            </article>
        </>
    );
}
