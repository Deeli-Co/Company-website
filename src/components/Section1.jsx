import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { Lightning } from "phosphor-react";
import BetaDialog from "./BetaDialog";
import FullWidthLottie from "./FullWidthLottie";
import { useTheme } from "@mui/material/styles";
import ReactGA from "react-ga4";
import useSectionTracker from "./hooks/useSectionTracker";
import { JOIN_BETA_TEXT } from "../constants";

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const sectionRef = useSectionTracker("section1");
  const handleClickOpen = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: `${JOIN_BETA_TEXT} - Section 1`,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        id="section1"
        ref={sectionRef}
        sx={{
          width: "100%",
          height: "687px",
          backgroundColor: "#132B24",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          "@media (max-width: 600px)": {
            height: "532px",
            padding: "20px",
            paddingTop: "100px", // Add top padding for mobile view
          },
        }}
      >
        <FullWidthLottie />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Manrope",
              fontSize: "54px",
              fontWeight: 600,
              lineHeight: "64.8px",
              width: "799px",
              color: "white",
              opacity: 1,
              marginBottom: "30px",
              marginTop: isMobile ? "10px" : "100px",
              "@media (max-width: 600px)": {
                fontSize: "28px",
                fontWeight: "600",
                lineHeight: "40px",
                width: "100%",
              },
            }}
          >
            Identify Next-Gen Tech and Unlock Growing Opportunities With
            AI-Powered Insights
          </Typography>
          <Typography
            sx={{
              fontFamily: "Aileron",
              fontSize: "20px",
              fontWeight: 300,
              lineHeight: "36px",
              width: "899px",
              color: "#DDE1E6",
              opacity: 1,
              marginBottom: "30px",
              "@media (max-width: 600px)": {
                fontSize: "16px",
                lineHeight: "24px",
                width: "100%",
              },
            }}
          >
            AI-Powered foresight for smarter technology investment decisions
          </Typography>
          <Button
            sx={{
              width: "256px",
              height: "64px",
              padding: "20px 44px",
              gap: "8px",
              borderRadius: "4px",
              backgroundColor: "#F2F8F7",
              color: "#132B24",
              textTransform: "none",
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "19.2px",
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#0D9786",
                color: "white",
                border: "1px solid #132B24",
              },
              "@media (max-width: 600px)": {
                width: "100%",
                height: "64px",
                padding: "10px 20px",
              },
            }}
            startIcon={
              <Lightning color={hover ? "white" : "#132B24"} weight="fill" />
            }
            onClick={handleClickOpen}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            disableRipple
          >
            {JOIN_BETA_TEXT}
          </Button>
        </Box>
      </Box>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Section1;
