import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../redux/actions";
import { Link } from "react-router-dom";

export default function ContactShort({ initialState }) {
    const dispatch = useDispatch();
    const projects = useSelector((state) => {
        return state.data;
    });

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);
    return (
        <>
            <div className="section-main-my-projects-wrapper ">
                <h1 className="main-info-header">Projects</h1>
                <section className="section-main-my-projects">
                    {!projects || projects.length === 0 ? (
                        <p>project are loading...</p>
                    ) : (
                        projects &&
                        projects.slice(0, 2).map((project, index) => (
                            <div key={index}>
                                <Link to={`/singleProject/${project._id}`}>
                                    <img src={project.image} alt="" />
                                    <h4>{project.title}</h4>
                                    {project.title_second && (
                                        <h4>{project.title_second}</h4>
                                    )}
                                </Link>
                            </div>
                        ))
                    )}
                </section>
                <Link to="/projects">
                    <button>more Projects</button>
                </Link>
            </div>
        </>
    );
}
