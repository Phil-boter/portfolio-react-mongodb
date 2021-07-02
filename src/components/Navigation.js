import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/NavigationComponent.css";
import ThreeComponent from "./ThreeComponent";
import useColorGenerator from "../hooks/useColorGenerator";

function NavigationMainComponent({
    initialState,
    color,
    setIsVisible,
    visible,
}) {
    const admin = useSelector((state) => {
        return state.admin;
    });

    if (!admin || !admin.id) {
        if (window.outerWidth <= 650) {
            return initialState.links.map((link) => (
                <Link
                    id="link"
                    key={link.id}
                    to={`${link.page}`}
                    onClick={() => setIsVisible(false)}
                    className="bg_slider link"
                >
                    {link.text}
                </Link>
            ));
        } else {
            return (
                <ThreeComponent
                    color={color}
                    setIsVisible={setIsVisible}
                    visible={visible}
                />
            );
        }
    } else {
        return (
            <>
                <Link to="/manageProjects">
                    <div className="navigation-link">Add Project</div>
                </Link>
                <Link to="/manageProjects">
                    <div className="navigation-link">Add Administrator</div>
                </Link>
                <Link to="/logout">
                    <div className="navigation-link">Logout</div>
                </Link>
            </>
        );
    }
}

export default function Navigation({ setIsVisible, visible, initialState }) {
    const admin = useSelector((state) => {
        return state.admin;
    });

    const [color, randomBackgroundColor] = useColorGenerator("");

    const handleClick = () => {
        setIsVisible(true);
        randomBackgroundColor();
    };

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
                                    <NavigationMainComponent
                                        initialState={initialState}
                                        admin={admin}
                                        visible={visible}
                                        setIsVisible={setIsVisible}
                                        color={color}
                                    />
                                </div>
                                <label className="login-logo">
                                    <Link to="/login">A</Link>
                                </label>
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        onClick={() => handleClick()}
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
