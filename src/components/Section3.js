import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/section3_1.svg"; 
import Image2 from "../assets/section3_2.svg";
import Image3 from "../assets/section3_3.svg";
import StarIcon from "../assets/star.svg";
import useSectionTracker from "./hooks/useSectionTracker";

const cardsData = [
  {
    image: Image1,
    alt: "Smart, Fast Searches",
    title: "Smart, Fast Searches",
    description: "Use AI to scan all sources quickly, eliminating bias and missing nothing.",
  },
  {
    image: Image2,
    alt: "Unified Data Platform",
    title: "Unified Data Platform",
    description: "Combine journals, patents, and more comprehensive tech evaluations.",
  },
  {
    image: Image3,
    alt: "Clear, Data-Driven Insights",
    title: "Unlock faster connections",
    description: "with innovators to seamlessly integrate and adapt to cutting-edge technologies.",
  },
];

const Section3 = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });
  const sectionRef = useSectionTracker("section3");
  useEffect(() => {
    if (inView1 || inView2 || inView3) {
      setStartAnimation(true);
    }
  }, [inView1, inView2, inView3]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: "884px",
        backgroundColor: "#F2F8F7",
        padding: "50px",
        paddingBottom: "130px",
        "@media (max-width: 600px)": {
          padding: "10px",
          height: "1616px",
          paddingBottom: "100px"
        },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
            "@media (max-width: 600px)": {
              marginTop: "50px",
            },
          }}
        >
          <img src={StarIcon} alt="Star" style={{ marginBottom: "10px" }} />
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "36px",
              fontWeight: 600,
              textAlign: "center",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: startAnimation ? 1 : 0,
              transform: startAnimation ? "translateY(0)" : "translateY(50px)",
              "@media (max-width: 600px)": {
                fontSize: "28px",
              },
            }}
          >
            Meet Immortal
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Aileron",
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "50px",
            transition: `opacity 1s ease-out, transform 1s ease-out`,
            transitionDelay: startAnimation ? "0.5s" : "0s",
            opacity: startAnimation ? 1 : 0,
            transform: startAnimation ? "translateY(0)" : "translateY(50px)",
            "@media (max-width: 600px)": {
              fontSize: "16px",
              marginBottom: "30px",
            },
          }}
        >
          Unveil the AI Visionary Powering Your Competitive Advantage
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} ref={ref1}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "opacity 1s ease-out, transform 1s ease-out",
                transitionDelay: startAnimation ? "1s" : "0s",
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? "translateY(0)" : "translateY(50px)",
                border: "1px solid #697077",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt={cardsData[0].alt}
                image={cardsData[0].image}
              />
              <CardContent>
                <Typography variant="body1" component="div" sx={{ color: '#6F6F6F' }}>
                  <Box component="span" fontWeight="fontWeightBold" sx={{ color: '#000000' }}>
                    {cardsData[0].title},
                  </Box>{" "}
                  {cardsData[0].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} ref={ref2}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "opacity 1s ease-out, transform 1s ease-out",
                transitionDelay: startAnimation ? "1.5s" : "0s",
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? "translateY(0)" : "translateY(50px)",
                border: "1px solid #697077",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt={cardsData[1].alt}
                image={cardsData[1].image}
              />
              <CardContent>
                <Typography variant="body1" component="div" sx={{ color: '#6F6F6F' }}>
                  <Box component="span" fontWeight="fontWeightBold" sx={{ color: '#000000' }}>
                    {cardsData[1].title},
                  </Box>{" "}
                  {cardsData[1].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} ref={ref3}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "opacity 1s ease-out, transform 1s ease-out",
                transitionDelay: startAnimation ? "2s" : "0s",
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? "translateY(0)" : "translateY(50px)",
                border: "1px solid #697077",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt={cardsData[2].alt}
                image={cardsData[2].image}
              />
              <CardContent>
                <Typography variant="body1" component="div" sx={{ color: '#6F6F6F' }}>
                  <Box component="span" fontWeight="fontWeightBold" sx={{ color: '#000000' }}>
                    {cardsData[2].title},
                  </Box>{" "}
                  {cardsData[2].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section3;
