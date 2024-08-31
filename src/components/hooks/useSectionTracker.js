import { useEffect, useRef } from "react";
import ReactGA from "react-ga4";

const useSectionTracker = (sectionId) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        ReactGA.event({
                            category: "Section",
                            action: "Scroll",
                            label: sectionId,
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);

        return () => {
            observer.unobserve(section);
        };
    }, [sectionId]);

    return sectionRef;
};

export default useSectionTracker;
