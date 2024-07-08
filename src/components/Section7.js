import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
import Image1 from "../assets/section7_1.svg";

const Section7 = () => {
  return (
    <Box
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
              Unlock Visionary Foresight
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
              Never miss another breakthrough innovation
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "24px",
              }}
            >
              Immortal's AI system leaves no stone unturned. Our models
              automatically synthesize data from every source to pinpoint
              game-changing innovations before they hit mainstream radar.
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
          <Box style={{ width: "100%", height: "100%" }}>
            <img
              src={Image1}
              alt="Visual Representation"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section7;
