import { useEffect } from "react";

import LoginComponent from "../components/LoginComponent";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";

export const Login = ({ setIsVisible, visible }) => {
    const initialState = {
        header: "about",
        header2: "",
        sectionHeader: "about",
        location: "about",
        links: [
            {
                id: 1,
                text: "Projects",
                page: "/projects",
            },
            {
                id: 2,
                text: "Contact",
                page: "/contact",
            },
            {
                id: 3,
                text: "About",
                page: "/about",
            },
        ],
    };
    useEffect(() => {
        setIsVisible(false);
        window.scrollTo(0, 0);
    }, [setIsVisible]);
    return (
        <>
            <LoginComponent
                setIsVisible={setIsVisible}
                visible={visible}
                initialState={initialState}
            />
            <Footer />
            <ScrollToTopButton />
        </>
    );
};
export default Login;
