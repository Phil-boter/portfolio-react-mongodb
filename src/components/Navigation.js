import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/NavigationComponent.css";
import { useState } from "react";

export default function Navigation({ setIsVisible, visible, initialState }) {
    const admin = useSelector((state) => {
        return state.admin;
    });

    const [color, setColor] = useState("");
    const styles = {
        style1: {
            transform: "rotate(45deg) translate(10.5px, 7.5px)",
            backgroundColor: "black",
        },
        style2: {
            opacity: 0,
        },
        style3: {
            transform: "rotate(-45deg) translate(7.5px, -5px)",
            backgroundColor: "black",
        },

        background: {
            backgroundColor: { color },
        },
    };

    function randomBackgroundColor() {
        console.log("click");
        setIsVisible(true);
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        setColor(bgColor);
    }

    return (
        <>
            <div className="navigation">
                <p className="navigation-title top-main">
                    <Link to="/">
                        PHILIPP<br></br>DAWID
                    </Link>
                </p>
                {visible ? (
                    <>
                        <div
                            onClick={() => setIsVisible(false)}
                            className="navigation-burger"
                        >
                            <div
                                style={styles.style1}
                                className="burger bar1"
                            ></div>
                            <div
                                style={styles.style2}
                                className="burger bar2"
                            ></div>
                            <div
                                style={styles.style3}
                                className="burger bar3"
                            ></div>
                        </div>
                        <div className="navigation-container">
                            <div
                                id="navigation-modal"
                                style={{ backgroundColor: color }}
                                className="navigation-modal"
                            >
                                <p className="navigation-title navigation-title-modal">
                                    <Link
                                        to="/"
                                        onClick={() => setIsVisible(false)}
                                    >
                                        PHILIPP<br></br>DAWID
                                    </Link>
                                </p>
                                <div className="link-container">
                                    {!admin || !admin.id ? (
                                        <>
                                            {initialState.links.map((link) => (
                                                <Link
                                                    id="link"
                                                    key={link.id}
                                                    to={`${link.page}`}
                                                    onClick={() =>
                                                        setIsVisible(false)
                                                    }
                                                    className="bg_slider link"
                                                >
                                                    {link.text}
                                                </Link>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/manageProjects">
                                                <div className="navigation-link">
                                                    Add Project
                                                </div>
                                            </Link>
                                            <Link to="/manageProjects">
                                                <div className="navigation-link">
                                                    Add Administrator
                                                </div>
                                            </Link>
                                            <Link to="/logout">
                                                <div className="navigation-link">
                                                    Logout
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </div>
                                <label className="login-logo">
                                    <Link to="/login">A</Link>
                                </label>
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        onClick={() => randomBackgroundColor()}
                        className="navigation-burger top-main"
                    >
                        <div className="burger bar1"></div>
                        <div className="burger bar2"></div>
                        <div className="burger bar3"></div>
                    </div>
                )}
            </div>
        </>
    );
}
