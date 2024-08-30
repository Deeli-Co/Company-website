import React, { useState } from "react";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import { Lightning } from "phosphor-react";
import { useTheme } from '@mui/material/styles';
import Image1 from "../assets/footer.svg";
import Logo from "../assets/footer_logo.svg";
import { JOIN_BETA_TEXT, DEELI_LINKEDIN_URL } from "../constants";
import BetaDialog from "./BetaDialog";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLink= () => {
    window.location.href = DEELI_LINKEDIN_URL;
  };

  return (
    <>
      <footer
        style={{
          backgroundColor: "#132B24",
          height: isMobile ? "614px" : "520px",
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: isMobile ? "20px" : "5%",
        }}
      >
        <Grid container spacing={2} style={{ marginBottom: "20px", paddingTop: isMobile ? "25px" : "0px"}}>
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Logo" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ flex: 1, marginBottom: isMobile ? "20px" : "40px" }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: isMobile ? "flex-start" : "flex-start",  // Align items to flex-start on mobile
              textAlign: isMobile ? "left" : "left",
            }}
          >
            <Typography
              style={{
                fontFamily: 'Manrope',
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: isMobile ? "32px" : "48px",
                marginBottom: isMobile ? "70px" : "20px",
              }}
            >
              Today's insight,
              <br />
              Tomorrow's trends
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-start" : "flex-end",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "flex-start" : "flex-start",  // Align items to flex-start on mobile
                paddingRight: isMobile ? "0" : "30%",
                gap: "10px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  color: "#FFFFFF",
                  marginBottom: isMobile ? "20px" : "10px",
                  borderBottom: "1px solid #FFFFFF",
                  cursor: "pointer"
                }}
                onClick={handleLink}
              >
                Follow on LinkedIn
              </Typography>
              <Typography
                variant="body1"
                component="a"
                href="mailto:support@deeli.ai"
                style={{
                  color: "#FFFFFF",
                  marginBottom: isMobile ? "20px" : "10px",
                  borderBottom: "1px solid #FFFFFF",
                  textDecoration: "none",
                }}
              >
                Contact us
              </Typography>
              {/* <Typography
                variant="body1"
                style={{
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  borderBottom: "1px solid #FFFFFF",
                }}
              >
                Privacy policy
              </Typography> */}
            </Box>
            <Box style={{ paddingRight: isMobile ? "0" : "22.5%", paddingTop: isMobile ? "20px" : "3%" }}>
              <Button
                sx={{
                  width: isMobile? "334px":"fit-content",
                  height: "52px",
                  padding: "16px 24px",
                  gap: "8px",
                  borderRadius: "4px",
                  border: "1px solid #132B24",
                  backgroundColor: "#0D9786",
                  textTransform: "none",
                  color: "white",
                  fontFamily: "Aileron",
                  fontSize: isMobile ? "19px" : "16px",
                  fontWeight: 600,
                  lineHeight: "19.2px",
                  letterSpacing: "0.01em",
                  textAlign: "left",
                  "&:hover": {
                    // width: '191px',
                    backgroundColor: "#F2F8F7",
                    color: "#132B24",
                    border: "0"
                  },
                }}
                startIcon={<Lightning weight="fill" />}
                onClick={handleClickOpen}
                disableRipple
              >
                {JOIN_BETA_TEXT}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingTop: isMobile ? "40px" : "80px",
          }}
        >
          <Typography variant="body2" style={{ color: "#FFFFFF", textAlign: "center" }}>
            © Deeli AI, Inc. 2024
          </Typography>
        </Grid>
      </footer>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Footer;
