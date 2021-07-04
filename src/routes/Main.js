import { useEffect } from "react";

import Navigation from "../components/Navigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import ProjectShort from "../components/ProjectShort";
import ThreeDragDrop from "../components/ThreeDragDrop";

import "../css/main.css";

export default function Main({ setIsVisible, visible }) {
    const initialState = {
        header: "Philipp",
        header2: "dawid",
        sectionHeader: "Welcome",
        location: "home",
        links: [
            {
                id: 0,
                text: "Projects",
                page: "/projects",
            },
            {
                id: 1,
                text: "About",
                page: "/about",
            },
            {
                id: 2,
                text: "Contact",
                page: "/contact",
            },
        ],
    };

    useEffect(() => {
        setIsVisible(false);
        window.scrollTo(0, 0);
    }, [setIsVisible]);

    return (
        <>
            <Navigation
                setIsVisible={setIsVisible}
                visible={visible}
                initialState={initialState}
            />
            <div className="section image-container">
                {/* <img id="main-image" src="/assets/marzahnMed.jpg" alt="main" /> */}
                <ThreeDragDrop />
            </div>
            <ProjectShort initialState={initialState} />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
