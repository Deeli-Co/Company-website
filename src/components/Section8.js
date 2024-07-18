import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const AnimatedNumber = ({ number, delay }) => {
  const { number: animatedNumber } = useSpring({
    from: { number: 0 },
    number,
    delay,
    config: { duration: 2000 },
  });

  return (
    <animated.span>{animatedNumber.to((n) => n.toFixed(0))}</animated.span>
  );
};

const Section8 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [box1Visible, setBox1Visible] = useState(false);
  const [box2Visible, setBox2Visible] = useState(false);
  const [box3Visible, setBox3Visible] = useState(false);

  useEffect(() => {
    if (inView1) {
      setTimeout(() => setBox1Visible(true), 300); // Delay of 0.3 seconds
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setBox2Visible(true); // No delay
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setTimeout(() => setBox3Visible(true), 100); // Delay of 0.1 seconds
    }
  }, [inView3]);

  return (
    <Container
      style={{
        marginTop: isMobile ? "430px" : "100px",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "488px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={isMobile ? 2 : 12} // Increased spacing for desktop view
          justifyContent="center"
          alignItems="center"
        >
          {/* First Box */}
          <Grid item xs={12} sm={4}>
            <Box
              ref={ref1}
              sx={{
                padding: "10px",
                borderTop: "1px solid #697077",
                textAlign: "left",
                width: "100%",
                height: { xs: "350px", sm: "325px" },
                transition: "opacity 1s ease-out, transform 1s ease-out",
                opacity: box1Visible ? 1 : 0,
                transform: box1Visible ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <Typography
                sx={{
                  color: "#096B5F",
                  fontSize: "54px",
                  fontWeight: 600,
                  fontFamily: "Manrope",
                  lineHeight: "64.8px",
                  paddingTop: "10px",
                }}
              >
                {box1Visible && <AnimatedNumber number={20} delay={500} />}X{" "}
                <ArrowUpward
                  sx={{
                    fontSize: "30px",
                    height: "30px",
                    width: "30px",
                    transform: "translateY(-10%)",
                  }}
                />
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  marginTop: "10px",
                }}
              >
                Faster at Identifying and Investing in New Technologies
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "30px", color: "#697077" }}
              >
                Helps you identify and acquire high-potential, emerging
                technologies 20x faster than competitors. Never miss
                game-changing innovations again.
              </Typography>
            </Box>
          </Grid>

          {/* Second Box */}
          <Grid item xs={12} sm={4}>
            <Box
              ref={ref2}
              sx={{
                padding: "10px",
                borderTop: "1px solid #697077",
                textAlign: "left",
                width: "100%",
                height: { xs: "360px", sm: "325px" },
                transition: "opacity 1s ease-out, transform 1s ease-out",
                opacity: box2Visible ? 1 : 0,
                transform: box2Visible ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <Typography
                sx={{
                  color: "#096B5F",
                  fontSize: "54px",
                  fontWeight: 600,
                  fontFamily: "Manrope",
                  lineHeight: "64.8px",
                  paddingTop: "10px",
                }}
              >
                {box2Visible && <AnimatedNumber number={40} delay={0} />}%{" "}
                <ArrowUpward
                  sx={{
                    fontSize: "30px",
                    height: "30px",
                    width: "30px",
                    transform: "translateY(-10%)",
                  }}
                />
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  marginTop: "10px",
                }}
              >
                More Likely to Discover Hidden Technologies
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "30px", color: "#697077", fontSize: "16px" }}
              >
                Tech scouts are 40% more likely to discover unique, hidden
                technologies not found elsewhere. Our emphasis on connections to
                innovators ensures access to breakthroughs that remain
                undiscovered.
              </Typography>
            </Box>
          </Grid>

          {/* Third Box */}
          <Grid item xs={12} sm={4}>
            <Box
              ref={ref3}
              sx={{
                padding: "10px",
                borderTop: "1px solid #697077",
                textAlign: "left",
                width: "100%",
                height: { xs: "325px", sm: "325px" },
                transition: "opacity 1s ease-out, transform 1s ease-out",
                opacity: box3Visible ? 1 : 0,
                transform: box3Visible ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <Typography
                sx={{
                  color: "#096B5F",
                  fontSize: "54px",
                  fontWeight: 600,
                  fontFamily: "Manrope",
                  lineHeight: "64.8px",
                  paddingTop: "10px",
                }}
              >
                {box3Visible && <AnimatedNumber number={18} delay={1000} />}{" "}
                <span
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "32px",
                    lineHeight: "38px",
                  }}
                >
                  Months Ahead
                </span>
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  marginTop: "10px",
                  fontSize: "23px",
                  lineHeight: "32px",
                  fontFamily: "Manrope",
                }}
              >
                Lead in Forecasting Technological Developments
              </Typography>
              <Typography
                sx={{
                  marginTop: "30px",
                  fontSize: "16px",
                  color: "#697077",
                }}
              >
                Get an 18-month head start on competitors by leveraging
                Immortal's ability to pinpoint disruptive tech opportunities
                before mainstream adoption.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Section8;
