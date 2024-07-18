import React, { useState, useEffect, useCallback } from "react";
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
      "Immortal connects investors with emerging tech Innovators, accelerating investment research with exclusive data. Our database uncovers the human experts behind hidden tech innovations, bridging the gap in investment information.",
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
    threshold: 0.2,
  });

  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.2,
  });

  const { ref: ref7, inView: inView7 } = useInView({
    threshold: 0.2,
  });

  const calculateVisiblePortion = useCallback((y, h) => {
    if (y !== 0 && !y) {
      return 0;
    }

    if (y > 0) {
      if (y > h) {
        return 0;
      }

      return (h - y) / h;
    } else {
      if (h + y < 0) {
        return 0;
      }

      return (h + y) / h;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const vh = window.innerHeight;
    const section5 = document.getElementById("section5");
    const section6 = document.getElementById("section6");
    const section7 = document.getElementById("section7");

    const section5VP = calculateVisiblePortion(
      section5?.getBoundingClientRect().y,
      vh
    );
    const section6VP = calculateVisiblePortion(
      section6?.getBoundingClientRect().y,
      vh
    );
    const section7VP = calculateVisiblePortion(
      section7?.getBoundingClientRect().y,
      vh
    );

    const indexOfLargestValue = [section5VP, section6VP, section7VP].reduce(
      (maxIndex, currentValue, currentIndex, array) =>
        currentValue > array[maxIndex] ? currentIndex : maxIndex,
      0
    );

    setCurrentSection(indexOfLargestValue);
  }, [calculateVisiblePortion]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleRightScroll = (event) => {
    const leftContent = document.getElementById("leftContent");
    if (leftContent) {
      const maxScrollTop = leftContent.scrollHeight - leftContent.clientHeight;
      const newScrollTop = leftContent.scrollTop + event.deltaY;

      if (newScrollTop >= 0 && newScrollTop <= maxScrollTop) {
        leftContent.scrollTop = newScrollTop;
        event.preventDefault();
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
          height: "100%",
          display: "flex",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          id="leftContent"
          sx={{
            width: "50%",
            padding: 0,
            margin: 0,
          }}
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
              transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
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
                fontFamily: "Manrope",
                '&:hover': {
                  backgroundColor: "#132B24",
                  boxShadow: "none",
                }
              }}
            >
              {sections[0].buttonText}
            </Button>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Manrope",
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
                fontFamily: "Manrope",
                fontWeight: 600,
                lineHeight: "24px",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: "#132B24",
                  borderBottom: "1px solid #132B24",
                },
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
              transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
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
                marginBottom: "20px",
                fontFamily: "Manrope",
                '&:hover': {
                  backgroundColor: "#132B24",
                  boxShadow: "none",
                }
              }}
            >
              {sections[1].buttonText}
            </Button>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Manrope",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: "44px",
                marginBottom: "20px",
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
                fontFamily: "Manrope",
                fontWeight: 600,
                lineHeight: "24px",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: "#132B24",
                  borderBottom: "1px solid #132B24",
                },
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
              transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
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
                fontFamily: "Manrope",
                '&:hover': {
                  backgroundColor: "#132B24",
                  boxShadow: "none",
                }
              }}
            >
              {sections[2].buttonText}
            </Button>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Manrope",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: "44px",
                marginBottom: "20px",
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
                fontFamily: "Manrope",
                fontWeight: 600,
                lineHeight: "24px",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: "#132B24",
                  borderBottom: "1px solid #132B24",
                },
              }}
              onClick={handleClickOpen}
            >
              <Lightning size={24} weight="fill" sx={{ marginRight: "4px" }} />
              Join Beta Now
            </Box>
          </Box>
        </Box>

        <Box
          id="rightContent"
          sx={{
            width: "50%",
            height: "100vh",
            position: "sticky",
            top: 0,
            display: "flex",
            overflow: "hidden",
            marginTop: "-30px",
          }}
        >
          <Box
            sx={{
              transition:
                currentSection === 0 &&
                "opacity 1.5s ease-out, transform 1.5s ease-out",
              opacity: currentSection === 0 ? 1 : 0,
              transform:
                inView5 || inView6 || inView7
                  ? "translateY(0)"
                  : "translateY(50px)",
              width: "100%",
              height: "100vh",
              position: "absolute",
              marginTop: "20px",
            }}
          >
            <img
              src={sections[0].image}
              alt="Visual Representation"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              transition:
                currentSection === 1 &&
                "opacity 1.5s ease-out, transform 1.5s ease-out",
              opacity: currentSection === 1 ? 1 : 0,
              transform:
                inView5 || inView6 || inView7
                  ? "translateY(0)"
                  : "translateY(50px)",
              width: "100%",
              height: "100vh",
              position: "absolute",
            }}
          >
            <img
              src={sections[1].image}
              alt="Visual Representation"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              transition:
                currentSection === 2 &&
                "opacity 1.5s ease-out, transform 1.5s ease-out",
              opacity: currentSection === 2 ? 1 : 0,
              transform:
                inView5 || inView6 || inView7
                  ? "translateY(0)"
                  : "translateY(50px)",
              width: "100%",
              height: "100vh",
              position: "absolute",
            }}
          >
            <img
              src={sections[2].image}
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
