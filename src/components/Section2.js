import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image1 from "../assets/section2_1.svg";
import Image2 from "../assets/section2_2.svg";
import Image3 from "../assets/section2_3.svg";

function Section2() {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "450px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 2,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: true,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image1} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image2} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image3} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image1} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image2} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image3} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image1} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image2} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image3} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image1} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image2} />
      </SplideSlide>
      <SplideSlide style={{ transform: "translateX(-20px)" }}>
        <img src={Image3} />
      </SplideSlide>
      {/* Additional slides can be added here */}
    </Splide>
  );
}

export default Section2;
