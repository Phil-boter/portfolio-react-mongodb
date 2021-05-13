import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../redux/actions";

import SingleProjectComponent from "./SingleProjectComponent";

import "../css/projectSection.css";

export default function ProjectsSection({ initialState, setIsVisible }) {
    const dispatch = useDispatch();
    const projects = useSelector((state) => {
        return state.data;
    });

    useEffect(() => {
        setIsVisible(false);
        dispatch(getProjects());
    }, [setIsVisible, dispatch]);

    return (
        <>
            <section className="project-section" id="project-section">
                {projects &&
                    projects.map((project, index) => (
                        <SingleProjectComponent
                            key={index}
                            project={project}
                            index={index}
                            initialState={initialState}
                        />
                    ))}
            </section>
        </>
    );
}
