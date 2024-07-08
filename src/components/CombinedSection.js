import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
import { useInView } from "react-intersection-observer";
import section5Image from "../assets/section5_1.svg";
import section6Image from "../assets/section6_1.svg";
import section7Image from "../assets/section7_1.svg";
import BetaDialog from "./BetaDialog";

const sections = [
  {
    id: "section7",
    title: "Never miss another breakthrough innovation",
    description:
      "Immortal's AI system leaves no stone unturned. Our models automatically synthesize data from every source to pinpoint game-changing innovations before they hit mainstream radar.",
    buttonText: "Unlock Visionary Foresight",
    image: section7Image,
  },
  {
    id: "section5",
    title: "Unifying fragmented data in one click",
    description:
      "Cut through fragmentation with Immortal's unified AI vision. Our advanced algorithms seamlessly integrate all data streams into precise, comprehensive tech predictions.",
    buttonText: "Cut Through Fragmented Searches",
    image: section5Image,
  },
  {
    id: "section6",
    title: "Connecting Innovation Scouters and Tech Visionaries",
    description:
      "De-risk investments with Immortal's data-driven authority. Our models forecast maturity and ROI potential with 98% accuracy, accelerating buy-in for future-defining tech.",
    buttonText: "Access Innovation Network",
    image: section6Image,
  },
];

const CombinedSection = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [currentSection, setCurrentSection] = useState(0);
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const handleLeftScroll = () => {
    const leftContent = document.getElementById("leftContent");
    const section5 = document.getElementById("section5");
    const section6 = document.getElementById("section6");
    const section7 = document.getElementById("section7");
    if (leftContent && section5 && section6 && section7) {
      const scrollPosition = leftContent.scrollTop;
      const section5Height = section5.offsetHeight;
      const section6Top = section6.offsetTop - section5.offsetTop;
      const section7Top = section7.offsetTop - section5.offsetTop;

      if (scrollPosition >= section7Top - section5Height / 2) {
        setCurrentSection(2);
      } else if (scrollPosition >= section6Top - section5Height / 2) {
        setCurrentSection(1);
      } else {
        setCurrentSection(0);
      }
    }
  };

  const handleRightScroll = (event) => {
    const leftContent = document.getElementById("leftContent");
    if (leftContent) {
      const maxScrollTop = leftContent.scrollHeight - leftContent.clientHeight;
      const newScrollTop = leftContent.scrollTop + event.deltaY;

      if (newScrollTop >= 0 && newScrollTop <= maxScrollTop) {
        leftContent.scrollTop = newScrollTop;
        event.preventDefault(); // Prevent the default scrolling behavior of the right side
      }
    }
  };

  useEffect(() => {
    const rightContent = document.getElementById("rightContent");
    if (rightContent) {
      rightContent.addEventListener("wheel", handleRightScroll);
      return () => {
        rightContent.removeEventListener("wheel", handleRightScroll);
      };
    }
  }, []);

  return (
    <>
      <Box
        id="combinedSection"
        sx={{
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Left Half */}
        <Box
          id="leftContent"
          sx={{
            width: "50%",
            overflowY: "scroll",
            height: "100vh",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
            padding: 0,
            margin: 0,
          }}
          onScroll={handleLeftScroll}
        >
          <Box
            id="section5"
            sx={{
              paddingLeft: "15%",
              paddingRight: "15%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: 0,
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView5 ? 1 : 0,
              transform: inView5 ? "translateY(0)" : "translateY(50px)",
            }}
            ref={ref5}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
                width: "fit-content",
                height: "auto",
                padding: "8px 12px",
                gap: "10px",
                borderRadius: "100px",
                backgroundColor: "#132B24",
                textAlign: "center",
                whiteSpace: "normal",
                lineHeight: "1.2",
                fontSize: "14px",
                boxShadow: "none",
                marginBottom: "12px",
                fontFamily: "Aileron",
              }}
            >
              {sections[1].buttonText}
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
              {sections[1].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "24px",
              }}
            >
              {sections[1].description}
            </Typography>
            <Box
              component="a"
              href="#"
              sx={{
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
              onClick={handleClickOpen}
            >
              <Lightning size={24} weight="fill" sx={{ marginRight: "4px" }} />
              Join Beta Now
            </Box>
          </Box>
          <Box
            id="section6"
            sx={{
              paddingLeft: "15%",
              paddingRight: "15%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: 0,
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView6 ? 1 : 0,
              transform: inView6 ? "translateY(0)" : "translateY(50px)",
            }}
            ref={ref6}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
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
                boxShadow: "none",
                marginBottom: "12px",
                fontFamily: "Aileron",
              }}
            >
              {sections[2].buttonText}
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
              {sections[2].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "24px",
              }}
            >
              {sections[2].description}
            </Typography>
            <Box
              component="a"
              href="#"
              sx={{
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
              onClick={handleClickOpen}
            >
              <Lightning size={24} weight="fill" sx={{ marginRight: "4px" }} />
              Join Beta Now
            </Box>
          </Box>
          <Box
            id="section7"
            sx={{
              paddingLeft: "15%",
              paddingRight: "15%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: 0,
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity: inView7 ? 1 : 0,
              transform: inView7 ? "translateY(0)" : "translateY(50px)",
            }}
            ref={ref7}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
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
                boxShadow: "none",
                marginBottom: "12px",
                fontFamily: "Aileron",
              }}
            >
              {sections[0].buttonText}
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
              {sections[0].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "24px",
              }}
            >
              {sections[0].description}
            </Typography>
            <Box
              component="a"
              href="#"
              sx={{
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
              onClick={handleClickOpen}
            >
              <Lightning size={24} weight="fill" sx={{ marginRight: "4px" }} />
              Join Beta Now
            </Box>
          </Box>
        </Box>

        {/* Right Half */}
        <Box
          id="rightContent"
          sx={{
            width: "50%",
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginTop: "-30px",
          }}
          onWheel={handleRightScroll}
        >
          <Box
            sx={{
              transition: "opacity 1s ease-out, transform 1s ease-out",
              opacity:
                (currentSection === 0 && inView5) ||
                (currentSection === 1 && inView6) ||
                (currentSection === 2 && inView7)
                  ? 1
                  : 0,
              transform:
                (currentSection === 0 && inView5) ||
                (currentSection === 1 && inView6) ||
                (currentSection === 2 && inView7)
                  ? "translateY(0)"
                  : "translateY(50px)",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={sections[currentSection].image}
              alt="Visual Representation"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default CombinedSection;
