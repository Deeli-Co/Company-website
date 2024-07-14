import React, { useEffect } from "react";
import "@dotlottie/player-component"; // Import the Lottie player

const LottieAnimation = ({ src, background, speed, loop, autoplay }) => {
  useEffect(() => {
    // Ensure the custom element is defined
    if (!customElements.get('dotlottie-player')) {
      import('@dotlottie/player-component');
    }
  }, []);

  return React.createElement('dotlottie-player', {
    src,
    background,
    speed,
    style: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 },
    loop,
    autoplay,
  });
};

export default LottieAnimation;
