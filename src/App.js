import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Main from "./routes/Main";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import SingleProject from "./routes/SingleProject";
import Login from "./routes/Login";
import ManageProjects from "./routes/ManageProjects";

import "./css/app.css";
import "./css/sectionComponent.css";

export default function App() {
    const admin = useSelector((state) => {
        return state.admin;
    });

    const [visible, setIsVisible] = useState(false);

    return (
        <div className="body-main-container">
            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Main setIsVisible={setIsVisible} visible={visible} />
                    )}
                />
                <Route
                    path="/about"
                    render={() => (
                        <About setIsVisible={setIsVisible} visible={visible} />
                    )}
                />
                <Route
                    path="/contact"
                    render={() => (
                        <Contact
                            setIsVisible={setIsVisible}
                            visible={visible}
                        />
                    )}
                />
                <Route
                    path="/projects"
                    render={() => (
                        <Projects
                            setIsVisible={setIsVisible}
                            visible={visible}
                        />
                    )}
                />
                <Route
                    path="/singleProject/:id"
                    render={(props) => (
                        <SingleProject
                            projectId={props.match.params.id}
                            setIsVisible={setIsVisible}
                            visible={visible}
                        />
                    )}
                />
                <Route
                    path="/login"
                    render={() => (
                        <Login setIsVisible={setIsVisible} visible={visible} />
                    )}
                />
                {!admin ? (
                    <Redirect to="/" />
                ) : (
                    <Route
                        path="/manageProjects"
                        render={() => (
                            <ManageProjects
                                setIsVisible={setIsVisible}
                                visible={visible}
                            />
                        )}
                    />
                )}
            </BrowserRouter>
        </div>
    );
}
