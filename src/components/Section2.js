import React, { useState, useEffect, useMemo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image1 from "../assets/section2_1.svg";
import Image2 from "../assets/section2_2.svg";
import Image3 from "../assets/section2_3.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const images = [Image1, Image2, Image3];

function Section2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallLaptop = useMediaQuery('(min-width: 1280px) and (max-width: 1540px)');

  const [gap, setGap] = useState("450px");

  useEffect(() => {
    if (isMobile) {
      setGap("0px");
    } else if (isSmallLaptop) {
      setGap("700px"); // Adjust this value as needed for 14-inch MacBook
    } else if (isMedium) {
      setGap("900px"); // Adjust this value as needed for medium screens
    } else {
      setGap("400px");
    }
  }, [isMobile, isMedium, isSmallLaptop]);

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
    <Splide options={options} extensions={{ AutoScroll }}>
      {Array.from({ length: 12 }).map((_, index) => (
        <SplideSlide key={index} style={isMobile ? { width: "100%" } : {}}>
          <img src={images[index % images.length]} alt={`Slide ${index + 1}`} style={isMobile ? { width: "100%" } : {}} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Section2;
