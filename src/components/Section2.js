import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image1 from "../assets/section2_1.svg";
import Image2 from "../assets/section2_2.svg";
import Image3 from "../assets/section2_3.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Section2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallLaptop = useMediaQuery('(min-width: 1280px) and (max-width: 1540px)');

  const [gap, setGap] = useState("450px");

  useEffect(() => {
    if (isMobile) {
      setGap("20px");
    } else if (isSmallLaptop) {
      setGap("700px"); // Adjust this value as needed for 14-inch MacBook
    } else if (isMedium) {
      setGap("900px"); // Adjust this value as needed for medium screens
    } else {
      setGap("450px");
    }
  }, [isMobile, isMedium, isSmallLaptop]);

  const options = {
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
  };
  return (
    <Splide options={options} extensions={{ AutoScroll }}>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image1} alt="Slide 1" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image2} alt="Slide 2" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image3} alt="Slide 3" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image1} alt="Slide 4" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image2} alt="Slide 5" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image3} alt="Slide 6" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image1} alt="Slide 7" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image2} alt="Slide 8" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image3} alt="Slide 9" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image1} alt="Slide 10" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image2} alt="Slide 11" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
      <SplideSlide style={isMobile ? { width: "100%" } : {}}>
        <img src={Image3} alt="Slide 12" style={isMobile ? { width: "100%" } : {}} />
      </SplideSlide>
    </Splide>
  );
}

export default Section2;
