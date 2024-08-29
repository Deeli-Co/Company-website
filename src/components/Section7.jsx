import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
import Image1 from "../assets/section6_1.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BetaDialog from "./BetaDialog";
import useSectionTracker from "./hooks/useSectionTracker";
import ReactGA from "react-ga4";

const Section7 = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Join Beta Now - Section 7"
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sectionRef = useSectionTracker("section7");
  return (
    <>
      <Box
        id="section7"
        ref={sectionRef}
        sx={{
          width: "100%",
          minHeight: isMobile ? "auto" : "813px",
          opacity: 1,
          position: "relative",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid container sx={{ height: "100%" }} direction={isMobile ? "column" : "row"}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              padding: isMobile ? "20px" : "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: isMobile ? "auto" : "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "550px",
                gap: "24px",
                opacity: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: isMobile ? "static" : "absolute",
                top: isMobile ? "auto" : "247px",
                left: isMobile ? "auto" : "112px",
              }}
            >
              <Button
                variant="contained"
                disableRipple
                sx={{
                  width: "fit-content",
                  height: "auto",
                  gap: "10px",
                  borderRadius: "100px",
                  backgroundColor: "#132B24",
                  color: "white",
                  textAlign: "center",
                  whiteSpace: "normal",
                  lineHeight: "20px",
                  fontSize: "14px",
                  boxShadow: "none",
                  marginTop: "20px",
                  fontFamily: "Manrope",
                  textTransform: "none",
                  padding: "8px 12px",
                }}
              >
                Access Innovation Network
              </Button>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Aileron",
                  fontSize: "36px",
                  fontWeight: 600,
                  lineHeight: "44px",
                  marginBottom: "5px",
                }}
              >
                Connecting Innovation Scouts and Tech Visionaries
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "20px",
                  lineHeight: "32px",
                  marginBottom: "24px",
                }}
              >
                Immortal connects investors with emerging tech Innovators, accelerating investment research with exclusive data. Our database uncovers the human experts behind hidden tech innovations, bridging the gap in investment information.
              </Typography>
              <Box
                component="div"
                sx={{
                  width: "fit-content",
                  height: "43px",
                  gap: "0px",
                  borderBottom: "1px solid #0EA996",
                  paddingBottom: "10px",
                  marginBottom: "50px",
                  color: "#0EA996",
                  textTransform: "none",
                  padding: "0",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  lineHeight: "24px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={handleClickOpen}
              >
                <Lightning size={24} weight="fill" sx={{ marginRight: "4px" }} />
                Join Beta Now
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              position: isMobile ? "static" : "relative",
              top: 0,
              height: isMobile ? "auto" : "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              minHeight: "403px",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={Image1}
                alt="Visual Representation"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Section7;
