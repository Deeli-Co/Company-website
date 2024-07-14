import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image1 from "../assets/section9_1.svg";
import Image2 from "../assets/section9_2.svg";

const Section9 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      style={{
        width: '100%',
        height: isMobile ? '200px' : '114px', // Adjust height for mobile view
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0px',
        opacity: 1,
        position: 'relative',
        padding: isMobile ? '0 16px' : '0', // Add padding for mobile view
        marginTop:  isMobile ? "300px" : '0px',
      }}
    >
      <img
        src={isMobile ? Image2 : Image1}
        alt="Center SVG"
        style={{
          width: isMobile ? '90%' : '40%', // Adjust width for mobile view
          height: isMobile ? '90%' : '23%', // Adjust height for mobile view
        }}
      />
    </Box>
  );
};

export default Section9;
