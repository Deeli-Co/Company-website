import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Lightning } from "phosphor-react";
import { useInView } from "react-intersection-observer";
import section5Image from "../assets/section5_1.svg";
import section6Image from "../assets/section6_1.svg";
import section7Image from "../assets/section7_1.svg";
import BetaDialog from "./BetaDialog";
import useSectionTracker from "./hooks/useSectionTracker";
import ReactGA from "react-ga4";
import { JOIN_BETA_TEXT } from "../constants";

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
        title: "Connecting Innovation Scouts and Tech Visionaries",
        description:
            "Immortal connects investors with emerging tech Innovators, accelerating investment research with exclusive data. Our database uncovers the human experts behind hidden tech innovations, bridging the gap in investment information.",
        buttonText: "Access Innovation Network",
        image: section6Image,
    },
];

const CombinedSection = () => {
    const [open, setOpen] = useState(false);
    const sectionRef = useSectionTracker("CombinedSection");
    const [currentSection, setCurrentSection] = useState(0);

    const handleClickOpen = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: `${JOIN_BETA_TEXT} - Combined Section`,
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    const handleRightScroll = (event) => {
        const leftContent = document.getElementById("leftContent");
        if (leftContent) {
            const maxScrollTop =
                leftContent.scrollHeight - leftContent.clientHeight;
            const newScrollTop = leftContent.scrollTop + event.deltaY;

            if (newScrollTop >= 0 && newScrollTop <= maxScrollTop) {
                leftContent.scrollTop = newScrollTop;
                event.preventDefault();
            }
        }
    };

    const handleScroll = useCallback(() => {
        const vh = window.innerHeight;
        const sections = ["section5", "section6", "section7"].map((id) =>
            document.getElementById(id)?.getBoundingClientRect()
        );
        const visiblePortions = sections.map((rect) =>
            calculateVisiblePortion(rect.y, vh)
        );
        const indexOfLargestValue = visiblePortions.indexOf(
            Math.max(...visiblePortions)
        );
        setCurrentSection(indexOfLargestValue);
    }, [calculateVisiblePortion]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        const rightContent = document.getElementById("rightContent");
        if (rightContent) {
            rightContent.addEventListener("wheel", handleRightScroll);
            return () => {
                rightContent.removeEventListener("wheel", handleRightScroll);
            };
        }
    }, []);

    const renderLeftContentSection = (index) => {
        const { buttonText, title, description } = sections[index];
        const [ref, inView] = useInView({ threshold: 0.2 });

        return (
            <Box
                id={`section${index + 5}`}
                sx={{
                    paddingLeft: "15%",
                    paddingRight: "15%",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    margin: 0,
                    transition:
                        "opacity 1.5s ease-out, transform 1.5s ease-out",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(50px)",
                }}
                ref={ref}
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
                        "&:hover": {
                            backgroundColor: "#132B24",
                            boxShadow: "none",
                        },
                    }}
                >
                    {buttonText}
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
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "20px",
                        lineHeight: "32px",
                        marginBottom: "24px",
                    }}
                >
                    {description}
                </Typography>
                <Box
                    component="div"
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
                    <Lightning
                        size={24}
                        weight="fill"
                        sx={{ marginRight: "4px" }}
                    />
                    {JOIN_BETA_TEXT}
                </Box>
            </Box>
        );
    };

    return (
        <>
            <Box
                id="combinedSection"
                ref={sectionRef}
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
                    {[0, 1, 2].map(renderLeftContentSection)}
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
                    {sections.map((section, index) => (
                        <Box
                            sx={{
                                transition:
                                    currentSection === index &&
                                    "opacity 1.5s ease-out, transform 1.5s ease-out",
                                opacity: currentSection === index ? 1 : 0,
                                transform: "translateY(0)",
                                width: "100%",
                                height: "100vh",
                                position: "absolute",
                                marginTop: index === 0 ? "20px" : 0,
                            }}
                        >
                            <img
                                src={section.image}
                                alt="Visual Representation"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <BetaDialog open={open} handleClose={handleClose} />
        </>
    );
};

export default CombinedSection;
