import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image1 from "../assets/section2_1.svg";
import Image2 from "../assets/section2_2.svg";
import Image3 from "../assets/section2_3.svg";

function Section2() {
  const [gap, setGap] = useState("30px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setGap("20px");
      } else if (window.innerWidth <= 1200) {
        setGap("30px");
      } else {
        setGap("30px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the correct gap

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Splide
      options={{
        type: "loop",
        gap: gap,
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 1,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: true,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <img src={Image1} alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image2} alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image3} alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image1} alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image2} alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image3} alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image1} alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image2} alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image3} alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image1} alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image2} alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={Image3} alt="Slide 3" />
      </SplideSlide>
    </Splide>
  );
}

export default Section2;
