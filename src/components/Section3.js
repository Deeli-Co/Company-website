import React from "react";
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

const Section3 = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Box
      sx={{
        width: "100%",
        height: "1064px",
        backgroundColor: "#F2F8F7",
        padding: "50px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <img src={StarIcon} alt="Star" style={{ marginBottom: "10px" }} />
          <Typography
            sx={{
              fontFamily: "Aileron",
              fontSize: "36px",
              fontWeight: 600,
              textAlign: "center",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? "translateY(0)" : "translateY(50px)",
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
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: inView1 ? 1 : 0,
            transform: inView1 ? "translateY(0)" : "translateY(50px)",
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
                opacity: inView1 ? 1 : 0,
                transform: inView1 ? "translateY(0)" : "translateY(50px)",
                border: "1px solid #697077",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Smart, Fast Searches"
                image={Image1} // Replace with the actual image path
              />
              <CardContent>
                <Typography variant="body1" component="div" sx={{color: '#6F6F6F'}}>
                  <Box component="span" fontWeight="fontWeightBold" sx={{color: '#000000'}}>
                    Smart, Fast Searches,
                  </Box>{" "}
                  Use AI to scan all sources quickly, eliminating bias and
                  missing nothing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} ref={ref2}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "opacity 1s ease-out, transform 1s ease-out",
                opacity: inView2 ? 1 : 0,
                transform: inView2 ? "translateY(0)" : "translateY(50px)",
                border: "1px solid #697077",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Unified Data Platform"
                image={Image2} // Replace with the actual image path
              />
              <CardContent>
                <Typography variant="body1" component="div" sx={{color: '#6F6F6F'}}>
                  <Box component="span" fontWeight="fontWeightBold" sx={{color: '#000000'}}>
                    Unified Data Platform,
                  </Box>{" "}
                  Combine journals, patents, and more comprehensive tech
                  evaluations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} ref={ref3}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "opacity 1s ease-out, transform 1s ease-out",
                opacity: inView3 ? 1 : 0,
                transform: inView3 ? "translateY(0)" : "translateY(50px)",
                border: "1px solid #697077",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Clear, Data-Driven Insights"
                // height="510"
                image={Image3} // Replace with the actual image path
              />
              <CardContent>
                <Typography variant="body1" component="div" sx={{color: '#6F6F6F'}}>
                  <Box component="span" fontWeight="fontWeightBold" sx={{color: '#000000'}}>
                    Unlock faster connections,
                  </Box>{" "}
                  with innovators to seamlessly integrate and adapt to cutting-edge technologies
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
