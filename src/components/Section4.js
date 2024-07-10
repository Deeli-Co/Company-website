import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/section4_1.svg";
import Image2 from "../assets/section4_2.svg";
import Image3 from "../assets/section4_3.svg";
import Image4 from "../assets/section4_4.svg";

const Section4 = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <Box
      style={{
        width: "100%",
        height: "881px",
        backgroundColor: "#132B24",
        padding: "40px 20px",
      }}
    >
      {/* Main Text */}
      <Typography
        variant="h3"
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "Aileron",
          fontSize: "54px",
          fontWeight: 500,
          lineHeight: "76.8px",
          paddingTop: "80px",
          //   paddingBottom: "20px",
          transition: "opacity 1s ease-out, transform 1s ease-out",
          opacity: inViewText ? 1 : 0,
          transform: inViewText ? "translateY(0)" : "translateY(50px)",
        }}
        ref={refText}
      >
        Smarter identification
        <br />
        of new technology
      </Typography>
      {/* Tags */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="20px"
        paddingTop="40px"
        paddingBottom="80px"
        paddingLeft="1%"
        paddingRight="1%"
      >
        <Chip
          label="R&D Oriented Company"
          variant="outlined"
          style={{
            background: "#F2F8F7",
            borderColor: "#fff",
            width: "247px",
            height: "48px",
            fontFamily: "Aileron",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "1000px",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView1 ? 1 : 0,
            transform: inView1 ? "translateY(0)" : "translateY(50px)",
          }}
        />
        <Chip
          label="Deep Tech VC"
          variant="outlined"
          style={{
            background: "#F2F8F7",
            borderColor: "#fff",
            width: "161px",
            height: "48px",
            fontFamily: "Aileron",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "1000px",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView2 ? 1 : 0,
            transform: inView2 ? "translateY(0)" : "translateY(50px)",
          }}
        />
        <Chip
          label="Research Center"
          variant="outlined"
          style={{
            background: "#F2F8F7",
            borderColor: "#fff",
            width: "180px",
            height: "48px",
            fontFamily: "Aileron",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "1000px",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView3 ? 1 : 0,
            transform: inView3 ? "translateY(0)" : "translateY(50px)",
          }}
        />
        <Chip
          label="Consulting Firm"
          variant="outlined"
          style={{
            background: "#F2F8F7",
            borderColor: "#fff",
            width: "175px",
            height: "48px",
            fontFamily: "Aileron",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "1000px",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView4 ? 1 : 0,
            transform: inView4 ? "translateY(0)" : "translateY(50px)",
          }}
        />
        <Chip
          label="Investment Bank"
          variant="outlined"
          style={{
            background: "#F2F8F7",
            borderColor: "#fff",
            width: "182px",
            height: "48px",
            fontFamily: "Aileron",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "1000px",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView4 ? 1 : 0,
            transform: inView4 ? "translateY(0)" : "translateY(50px)",
          }}
        />
        <Chip
          label="Technology Service Provider"
          variant="outlined"
          style={{
            background: "#F2F8F7",
            borderColor: "#fff",
            width: "289px",
            height: "48px",
            fontFamily: "Aileron",
            fontSize: "16px",
            fontWeight: "400",
            borderRadius: "1000px",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView4 ? 1 : 0,
            transform: inView4 ? "translateY(0)" : "translateY(50px)",
          }}
        />
      </Box>
      {/* Images with Captions */}
      <Box display="flex" justifyContent="center" gap="20px">
        <Box textAlign="center" ref={ref1}>
          <img
            src={Image2}
            alt="IT & Software"
            style={{
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView2 ? 1 : 0,
              transform: inView2 ? "translateY(0)" : "translateY(50px)",
            }}
          />
        </Box>
        <Box textAlign="center" ref={ref2}>
          <img
            src={Image1}
            alt="Life Science"
            style={{
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? "translateY(0)" : "translateY(50px)",
            }}
          />
        </Box>
        <Box textAlign="center" ref={ref3}>
          <img
            src={Image3}
            alt="Robotics"
            style={{
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView3 ? 1 : 0,
              transform: inView3 ? "translateY(0)" : "translateY(50px)",
            }}
          />
        </Box>
        <Box textAlign="center" ref={ref4}>
          <img
            src={Image4}
            alt="Automotive"
            style={{
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView4 ? 1 : 0,
              transform: inView4 ? "translateY(0)" : "translateY(50px)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
