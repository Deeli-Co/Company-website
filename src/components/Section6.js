import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
// import Image1 from "../assets/section6_1.svg";

const Section6 = (props) => {
  return (
    <Box
      id="section6"
      style={{
        width: "100%",
        height: "813px",
        opacity: 1,
        position: "relative",
      }}
    >
      <Grid container style={{ height: "100%" }}>
        {/* Left Half */}
        <Grid
          item
          xs={6}
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Center align horizontally
            height: "100%",
          }}
        >
          <Box
            style={{
              width: "532px",
              height: "322px",
              gap: "24px",
              opacity: 1, // Set to 1 to make content visible
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align items to the start of the flex container
              position: "absolute",
              top: "247px",
              left: "112px",
            }}
          >
            <Button
              variant="contained"
              disableRipple
              style={{
                width: "fit-content",
                height: "auto",
                padding: "8px 12px",
                gap: "10px",
                borderRadius: "100px",
                backgroundColor: "#132B24",
                color: "white",
                textAlign: "center",
                whiteSpace: "normal",
                lineHeight: "1.2",
                fontSize: "14px",
                boxShadow: "none", // Remove button shadow
                marginBottom: "12px",
                fontFamily: "Aileron",
              }}
            >
              Access Innovation Network
            </Button>
            <Typography
              variant="h3"
              style={{
                fontFamily: "Aileron",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: "44px",
                marginBottom: "5px",
              }}
            >
              Connecting Innovation Scouters and Tech Visionaries
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "24px",
              }}
            >
              De-risk investments with Immortal's data-driven authority. Our
              models forecast maturity and ROI potential with 98% accuracy,
              accelerating buy-in for future-defining tech.
            </Typography>
            <Box
              component="a"
              href="#"
              style={{
                width: "fit-content",
                height: "33px",
                gap: "0px",
                borderBottom: "1px solid #0EA996",
                paddingBottom: "10px",
                color: "#0EA996",
                textTransform: "none",
                padding: "0",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Aileron",
                fontWeight: 600,
                lineHeight: "24px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Lightning
                size={24}
                weight="fill"
                style={{ marginRight: "4px" }}
              />
              Join Beta Now
            </Box>
          </Box>
        </Grid>

        {/* Right Half */}
        <Grid
          item
          xs={6}
          style={{
            backgroundColor: "#C6E1DB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box style={{ width: "100%", }}>
            <img
              src={props.image}
              alt="Visual Representation"
              style={{ width: "100%", height: "100%"}}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section6;
