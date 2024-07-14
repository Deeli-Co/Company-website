import React, { useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { Lightning } from "phosphor-react";
import { useInView } from "react-intersection-observer";
import { useTheme } from '@mui/material/styles';
import Image1 from "../assets/section10_1.svg";
import Image2 from "../assets/section10_2.svg";
import Image3 from "../assets/section10_3.svg";
import Image4 from "../assets/section10_4.svg";
import Image5 from "../assets/section10_5.svg";
import BetaDialog from "./BetaDialog";

const Section10 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { ref: refBox, inView: inViewBox } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: refAvatars, inView: inViewAvatars } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: refButton, inView: inViewButton } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
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
        ref={refBox}
        style={{
          width: "100%",
          height: isMobile? "657px" : "742px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: inViewBox ? 1 : 0,
          transform: inViewBox ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        <Box
          style={{
            width: "1357px",
            height: "657px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${isMobile ? Image5 : Image1})`,
            borderRadius: isMobile? "0px": "10px",
            color: "#fff",
            padding: isMobile ? "20px" : "0", // Add padding for mobile view
          }}
        >
          <Box
            ref={refAvatars}
            display="flex"
            alignItems="center"
            mb={2}
            style={{
              opacity: inViewAvatars ? 1 : 0,
              transform: inViewAvatars ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            <img
              src={Image2}
              alt="Avatar1"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <img
              src={Image3}
              alt="Avatar2"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <img
              src={Image4}
              alt="Avatar3"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
          </Box>
          <Typography
            ref={refText}
            variant="h3"
            style={{
              fontFamily: "Manrope",
              fontSize: "40px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "48px",
              opacity: inViewText ? 1 : 0,
              transform: inViewText ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            Invest in the Future, TODAY
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: "18px",
              textAlign: "center",
              marginTop: "10px",
              opacity: inViewText ? 1 : 0,
              transform: inViewText ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            Never waste another resource <br/> chasing the wrong technologies or <br/>
            opportunities.
          </Typography>
          <Box
            ref={refButton}
            display="flex"
            alignItems="center"
            mt={4}
            style={{
              opacity: inViewButton ? 1 : 0,
              transform: inViewButton ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            <Button
              variant="contained"
              disableRipple
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile? "325px":"fit-content",
                height: "56px",
                gap: "8px",
                fontSize: "20px",
                backgroundColor: "#F2F8F7",
                color: "#0EA996",
                textTransform: "none",
                borderRadius: "4px",
                borderBottom: "1px solid #132B24",
                boxShadow: "none",
              }}
              onClick={handleClickOpen}
            >
              <Lightning
                size={24}
                weight="fill"
                style={{ marginRight: "8px" }}
              />
              Join Beta Now
            </Button>
          </Box>
        </Box>
      </Box>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Section10;
