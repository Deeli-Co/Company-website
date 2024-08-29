import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
import Image1 from "../assets/section7_1.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import BetaDialog from "./BetaDialog";
import useSectionTracker from "./hooks/useSectionTracker";
import ReactGA from "react-ga4";

const Section6 = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Join Beta Now - Section 6"
    });
    setOpen(true);
  };
  const sectionRef = useSectionTracker("section6");
  return (
    <>
      <Box
        id="section5"
        ref={sectionRef}
        sx={{
          width: "100%",
          height: isMobile ? "auto" : "813px",
          opacity: 1,
          position: "relative",
          backgroundColor: "#FFFFFF", // Match the background color with the container holding the image
        }}
      >
        <Grid
          container
          sx={{ height: "100%" }}
          direction={isMobile ? "column" : "row"}
        >
          {/* Top Half (or Left in Desktop) */}
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
                  height: "33px",
                  gap: "10px",
                  borderRadius: "100px",
                  backgroundColor: "#132B24",
                  color: "white",
                  textAlign: "center",
                  whiteSpace: "normal",
                  lineHeight: "1.2",
                  fontSize: "14px",
                  boxShadow: "none",
                  marginTop: "20px",
                  fontFamily: "Manrope",
                  textTransform: "none",
                  padding: "8px, 12px, 8px, 12px",
                }}
              >
                Cut Through Fragmented Searches
              </Button>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Aileron",
                  fontSize: "32px",
                  fontWeight: 600,
                  lineHeight: "44px",
                  marginBottom: "5px",
                }}
              >
                Unifying fragmented data in one click
              </Typography>
              <Typography
                // variant="body1"
                sx={{
                  width: "335px",
                  height: "160px",
                  fontSize: "19px",
                  lineHeight: "32px",
                }}
              >
                Cut through fragmentation with Immortal's unified AI vision. Our
                advanced algorithms seamlessly integrate all data streams into
                precise, comprehensive tech predictions.
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
                  lineHeight: "20px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={handleClickOpen}
              >
                <Lightning
                  size={24}
                  weight="fill"
                  sx={{ marginRight: "5px" }}
                />
                Join Beta Now
              </Box>
            </Box>
          </Grid>

          {/* Bottom Half (or Right in Desktop) */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              position: isMobile ? "static" : "sticky",
              top: 0,
              height: isMobile ? "auto" : "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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

export default Section6;
