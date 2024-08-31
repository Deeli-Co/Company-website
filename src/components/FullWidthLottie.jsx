import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/background.json"; // Update this path to your actual Lottie JSON file

const FullWidthLottie = () => {
    const extraWidth = 280;
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth + extraWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth + extraWidth,
                height: window.innerHeight + 1000,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
            }}
        >
            <Lottie
                loop
                animationData={animationData}
                play
                renderer="canvas" // Change renderer to canvas for better performance
                style={{ width: dimensions.width, height: dimensions.height }}
            />
        </div>
    );
};

export default FullWidthLottie;
