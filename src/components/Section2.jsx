import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image1 from "../assets/section2_1.svg";
import Image2 from "../assets/section2_2.svg";
import Image3 from "../assets/section2_3.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useSectionTracker from "./hooks/useSectionTracker";

const images = [Image1, Image2, Image3];

const useResponsiveSettings = () => {
  const theme = useTheme();

  const breakpoints = {
    isMobile: useMediaQuery(theme.breakpoints.down('sm')),
    isMedium: useMediaQuery(theme.breakpoints.between('sm', 'md')),
    isSmallLaptop: useMediaQuery('(min-width: 1400px) and (max-width: 1540px)'),
    isTiny: useMediaQuery('(min-width: 580px) and (max-width: 900px)'),
    isMid: useMediaQuery('(min-width: 1140px) and (max-width: 1280px)'),
    isSmMid: useMediaQuery('(min-width: 1030px) and (max-width: 1140px)'),
    isSSMid: useMediaQuery('(min-width: 900px) and (max-width: 1030px)'),
    isSm: useMediaQuery('(min-width: 1280px) and (max-width: 1400px)'),
  }

  const gap = () => {
    if (breakpoints.isMobile) return "0px";
    if (breakpoints.isSmallLaptop) return "700px";
    if (breakpoints.isMedium) return "900px";
    if (breakpoints.isTiny) return "180px";
    if (breakpoints.isMid) return "950px";
    if (breakpoints.isSm) return "800px";
    if (breakpoints.isSmMid) return "1050px";
    if (breakpoints.isSSMid) return "1100px";
    return "400px";
  };

  return { breakpoints, gap }
}

function Section2() {
  const sectionRef = useSectionTracker("section2");

  const { breakpoints, gap } = useResponsiveSettings();

  const options = {
    type: "loop",
    gap: gap,
    drag: "free",
    arrows: false,
    pagination: false,
    perPage: breakpoints.isMobile ? 1 : 2,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: true,
      speed: 1,
    },
  };

  const slideStyle = breakpoints.isMobile ? { width: "100%" } : {};

  return (
    <div id="section2" ref={sectionRef}>
      <Splide options={options} extensions={{ AutoScroll }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <SplideSlide key={index} style={slideStyle}>
            <img src={images[index % images.length]} alt={`Slide ${index + 1}`} style={slideStyle} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Section2;