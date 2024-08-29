import React, { useMemo } from "react";
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

function Section2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallLaptop = useMediaQuery('(min-width: 1400px) and (max-width: 1540px)');
  const isTiny = useMediaQuery('(min-width: 580px) and (max-width: 900px)');
  const isMid = useMediaQuery('(min-width: 1140px) and (max-width: 1280px)');
  const isSmMid = useMediaQuery('(min-width: 1030px) and (max-width: 1140px)');
  const isSSMid = useMediaQuery('(min-width: 900px) and (max-width: 1030px)');
  const isSm = useMediaQuery('(min-width: 1280px) and (max-width: 1400px)');
  const sectionRef = useSectionTracker("section2");
  // useEffect(() => {
  //   const getCurrentScreenSize = () => {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;
  //     return { width, height };
  //   };

  //   const currentScreenSize = getCurrentScreenSize();
  //   console.log("Current screen size:", currentScreenSize);
  //   console.log("isMobile:", isMobile);
  //   console.log("isMedium:", isMedium);
  //   console.log("isSmallLaptop:", isSmallLaptop);
  //   console.log("isTiny:", isTiny);
  //   console.log("isMid:", isMid);
  //   console.log("isSmMid:", isSmMid);
  //   console.log("isSm:", isSm);
  //   console.log("isSSmd:", isSSMid);
  // }, [isMobile, isMedium, isSmallLaptop, isTiny, isMid, isSm, isSmMid, isSSMid]);

  const gap = useMemo(() => {
    if (isMobile) {
      return "0px";
    } else if (isSmallLaptop) {
      return "700px"; // Adjust this value as needed for 14-inch MacBook
    } else if (isMedium) {
      return "900px";
    } else if (isTiny) {
      return "180px";
    } else if (isMid) {
      return "950px";
    } else if (isSm) {
      return "800px";
    } else if (isSmMid) {
      return "1050px";
    } else if (isSSMid) {
      return "1100px";
    } else {
      return "400px";
    }
  }, [isMobile, isMedium, isSmallLaptop, isTiny, isMid, isSm, isSmMid, isSSMid]);

  const options = useMemo(() => ({
    type: "loop",
    gap: gap,
    drag: "free",
    arrows: false,
    pagination: false,
    perPage: isMobile ? 1 : 2,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: true,
      speed: 1,
    },
  }), [gap, isMobile]);

  return (
    <div id="section2" ref={sectionRef}>
      <Splide options={options} extensions={{ AutoScroll }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <SplideSlide key={index} style={isMobile ? { width: "100%" } : {}}>
            <img src={images[index % images.length]} alt={`Slide ${index + 1}`} style={isMobile ? { width: "100%" } : {}} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Section2;
