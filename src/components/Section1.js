import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
import Section1Image from "../assets/section1.svg";
import BetaDialog from "./BetaDialog";

const Section1 = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "768px",
          backgroundColor: "#132B24",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          "@media (max-width: 600px)": {
            height: "auto",
            padding: "20px",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "200%",
            height: "200%",
            backgroundImage: `url(${Section1Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translate(-50%, -50%)",
            animation: "moveBackground 30s linear infinite",
          },
          "@keyframes moveBackground": {
            "0%": {
              transform: "translate(-50%, -50%)",
            },
            "100%": {
              transform: "translate(0%, 0%)",
            },
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Aileron",
            fontSize: "54px",
            fontWeight: 500,
            lineHeight: "64.8px",
            width: "799px",
            color: "white",
            opacity: 1,
            marginBottom: "30px",
            "@media (max-width: 600px)": {
              fontSize: "32px",
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
            fontFamily: "Aileron",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "19.2px",
            letterSpacing: "0.01em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#E4F0EE",
            },
            "@media (max-width: 600px)": {
              width: "100%",
              height: "auto",
              padding: "10px 20px",
            },
          }}
          startIcon={<Lightning color="#132B24" weight="fill" />}
          onClick={handleClickOpen}
          disableRipple
        >
          Join Beta Now
        </Button>
      </Box>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Section1;
