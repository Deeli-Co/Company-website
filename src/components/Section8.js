import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { ArrowUpward } from "@mui/icons-material";

const Section8 = () => {
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

  return (
    <Box
      style={{
        width: "100%",
        height: "488px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        marginTop: "100px",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* First Box */}
        <Grid item>
          <Box
            ref={ref1}
            style={{
              padding: "20px",
              border: "1px solid #697077",
              borderRadius: "8px",
              textAlign: "left",
              width: "420px",
              height: "325px",
              background: "#F2F8F7",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <Typography
              style={{
                color: "#096B5F",
                fontSize: "54px",
                fontWeight: 500,
                fontFamily: "Aileron",
                lineHeight: "64.8px",
              }}
            >
              20X <ArrowUpward
                style={{
                  fontSize: "30px",
                  height: "30px",
                  width: "30px",
                  transform: "translateY(-10%)",
                }}
              />
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: 600, marginTop: "10px" }}
            >
              Faster at Identifying and Investing in New Technologies
            </Typography>
            <Typography variant="body1" style={{ marginTop: "30px" }}>
              Helps you identify and acquire high-potential, emerging
              technologies 20x faster than competitors. Never miss game-changing
              innovations again.
            </Typography>
          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item>
          <Box
            ref={ref2}
            style={{
              padding: "20px",
              border: "1px solid #697077",
              borderRadius: "8px",
              textAlign: "left",
              width: "420px",
              height: "325px",
              background: "#F2F8F7",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView2 ? 1 : 0,
              transform: inView2 ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <Typography
              style={{
                color: "#096B5F",
                fontSize: "54px",
                fontWeight: 500,
                fontFamily: "Aileron",
                lineHeight: "64.8px",
              }}
            >
              40%{" "}
              <ArrowUpward
                style={{
                  fontSize: "30px",
                  height: "30px",
                  width: "30px",
                  transform: "translateY(-10%)",
                }}
              />
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: 500, marginTop: "10px" }}
            >
              Tech Network Growth Fuels Investment Potential
            </Typography>
            <Typography variant="body1" style={{ marginTop: "30px" }}>
              With 98% prediction accuracy, Immortal's AI models precisely
              forecast tech roadmaps and market shifts, consistently
              outperforming human analysis alone.
            </Typography>
          </Box>
        </Grid>

        {/* Third Box */}
        <Grid item>
          <Box
            ref={ref3}
            style={{
              padding: "20px",
              border: "1px solid #697077",
              borderRadius: "8px",
              textAlign: "left",
              width: "420px",
              height: "325px",
              background: "#F2F8F7",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView3 ? 1 : 0,
              transform: inView3 ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <Typography
              style={{
                color: "#096B5F",
                fontSize: "54px",
                fontWeight: 500,
                fontFamily: "Aileron",
                lineHeight: "64.8px",
              }}
            >
              18{" "}
              <span style={{ fontSize: "32px", lineHeight: "38px" }}>
                Months Ahead
              </span>
            </Typography>
            <Typography
              style={{
                fontWeight: 600,
                marginTop: "10px",
                fontSize: "23px",
                lineHeight: "32px",
              }}
            >
              Lead in Forecasting Technological Developments
            </Typography>
            <Typography style={{ marginTop: "30px", fontSize: "16px" }}>
              Get an 18-month head start on competitors by leveraging Immortal's
              ability to pinpoint disruptive tech opportunities before
              mainstream adoption.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section8;
