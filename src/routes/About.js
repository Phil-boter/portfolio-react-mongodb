import { useEffect } from "react";

import AboutSection from "../components/AboutSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import HeadlineComponent from "../components/HeadlineComponent";

export default function About({ setIsVisible, visible }) {
    const initialState = {
        header: "about",
        header2: "",
        sectionHeader: "about",
        location: "about",
        image: "",
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
            <HeadlineComponent initialState={initialState} />
            <AboutSection initialState={initialState} />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
