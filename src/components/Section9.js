import React from 'react';
import { Box } from '@mui/material';
import Image1 from "../assets/section9_1.svg";

const Section9 = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '114px',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0px',
        opacity: 1,
        position: 'relative',
      }}
    >
      <img src={Image1} alt="Center SVG" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Box>
  );
};

export default Section9;
