import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ShieldCheck } from "phosphor-react";
import useSectionTracker from "./hooks/useSectionTracker";

const Section11 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sectionRef = useSectionTracker("section11");
  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: "244px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        opacity: 1,
        padding: isMobile ? "40px" : "0", // Add more padding for mobile view
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "27px",
          height: "27px",
          backgroundColor: "#086B5F", // Green/900
          borderRadius: "50%",
          padding: "5px", // Added padding for better icon centering
        }}
      >
        <ShieldCheck size={16} weight="fill" color="#ffffff" />
      </Box>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: "14px",
          color: "#1E3A3A",
          marginTop: "10px", // Add margin to separate icon and text
        }}
      >
        {isMobile ? (
          <>
            With cutting-edge security protocols and an elite team safeguarding
            your proprietary information, you can confidently embrace visionary
            AI knowing your mission- critical data integrity is assured.
          </>
        ) : (
          <>
            With cutting-edge security protocols and an elite team safeguarding
            <br />
            your proprietary information, you can confidently embrace visionary
            AI
            <br />
            knowing your mission-critical data integrity is assured.
          </>
        )}
      </Typography>
    </Box>
  );
};

export default Section11;
