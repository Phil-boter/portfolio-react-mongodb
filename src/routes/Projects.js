import { useEffect } from "react";

import ProjectsSection from "../components/ProjectsSection";
import Navigation from "../components/Navigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";

export default function Projects({ setIsVisible, visible }) {
    const initialState = {
        header: "Projects",
        header2: "",
        sectionHeader: "projects",
        location: "projects",
        links: [
            {
                id: 0,
                text: "Home",
                page: "/",
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
            <ProjectsSection
                setIsVisible={setIsVisible}
                visible={visible}
                initialState={initialState}
            />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
