import { useEffect } from "react";

import ContactSection from "../components/ContactSection";
import Navigation from "../components/Navigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";

export default function Contact({ setIsVisible, visible }) {
    const initialState = {
        header: "contact",
        header2: "",
        sectionHeader: "contact",
        location: "contact",
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
            <Navigation
                setIsVisible={setIsVisible}
                visible={visible}
                initialState={initialState}
            />

            <ContactSection />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
