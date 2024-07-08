import React from 'react';
import { Box, Typography } from '@mui/material';
import { ShieldCheck } from 'phosphor-react';

const Section11 = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '244px',
        display: 'flex',
        flexDirection: 'column', // Set direction to column
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        opacity: 1,
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '27px',
          height: '27px',
          backgroundColor: '#086B5F', // Green/900
          borderRadius: '50%',
          padding: '5px',  // Added padding for better icon centering
        }}
      >
        <ShieldCheck size={16} weight="fill" color="#ffffff" />
      </Box>
      <Typography
        variant="body1"
        style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#1E3A3A',
          marginTop: '10px', // Add margin to separate icon and text
        }}
      >
        With cutting-edge security protocols and an elite team safeguarding
        <br />
        your proprietary information, you can confidently embrace visionary AI
        <br />
        knowing your mission-critical data integrity is assured.
      </Typography>
    </Box>
  );
};

export default Section11;
