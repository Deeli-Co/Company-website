import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const useSectionTracker = (sectionId) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ReactGA.event({
              category: 'Section',
              action: 'Scroll',
              label: sectionId,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId]);
};

export default useSectionTracker;
