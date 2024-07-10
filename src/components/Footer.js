import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Lightning } from "phosphor-react";
import Image1 from "../assets/footer.svg";
import Logo from "../assets/footer_logo.svg";
import BetaDialog from "./BetaDialog";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <footer
        style={{
          backgroundColor: "#132B24",
          height: "520px",
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "5%",
        }}
      >
        <Grid container spacing={2} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Logo" />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ flex: 1, marginBottom: "40px" }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                fontFamily: 'Aileron',
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "48px",
                marginBottom: "20px",
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
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingRight: "30%",
                gap: "10px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  borderBottom: "1px solid #FFFFFF",
                }}
              >
                Follow on Linkedin
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  borderBottom: "1px solid #FFFFFF",
                }}
              >
                Contact us
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  borderBottom: "1px solid #FFFFFF",
                }}
              >
                Privacy policy
              </Typography>
            </Box>
            <Box style={{ paddingRight: "22.5%", paddingTop: "3%" }}>
              <Button
                sx={{
                  width: "fit-content",
                  height: "52px",
                  padding: "16px 24px",
                  gap: "8px",
                  borderRadius: "4px",
                  border: "1px solid #132B24",
                  backgroundColor: "#0D9786",
                  textTransform: "none",
                  color: "white",
                  fontFamily: "Aileron",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "19.2px",
                  letterSpacing: "0.01em",
                  textAlign: "left",
                  "@media (max-width: 600px)": {
                    width: "100%",
                    height: "auto",
                    fontSize: "14px",
                  },
                  "&:hover": {
                    backgroundColor: "#096B5F",
                  },
                }}
                startIcon={<Lightning weight="fill" />}
                onClick={handleClickOpen}
                disableRipple
              >
                Join Beta Now
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
            paddingTop: "80px",
          }}
        >
          <Typography variant="body2" style={{ color: "#FFFFFF" }}>
            © Deeli.ai Inc. 2024
          </Typography>
        </Grid>
      </footer>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Footer;
