import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Lightning } from 'phosphor-react';
import Logo from '../assets/logo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BetaDialog from './BetaDialog';
import { JOIN_BETA_TEXT, DEELI_LINKEDIN_URL } from "../constants";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    window.location.href = DEELI_LINKEDIN_URL;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#FFFFFF',
          height: 80,
          boxShadow: 'none',
          transition: 'top 0.3s',
          top: showHeader ? 0 : '-80px',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: 33.28,
                width: 105.42,
                marginLeft: 50,
                marginTop: 10,
                ...(isMobile && { marginLeft: 12, marginTop: 20, position: 'absolute', top: 0, left: 0 }),
              }}
            />
          </Box>
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                marginTop: 2,
              }}
            >
              <Button
               x
                sx={{
                  // border: '1px solid #121619',
                  width: '175px',
                  height: '51px',
                  gap: '8px',
                  borderRadius: '4px',
                  borderTopWidth: '1px',
                  textTransform: 'none',
                  color: '#697077',
                  fontFamily: 'Aileron',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '19.2px',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                  '@media (max-width: 600px)': {
                    width: '100%',
                    height: 'auto',
                    fontSize: '14px',
                  },
                  '&:hover': {
                    backgroundColor: "#ffffff",
                    color: "#132B24",
                    border: "0px solid #132B24",
                  },
                }}
                disableRipple
                onClick={handleLinkClick}
              >
                Follow on LinkedIn
              </Button>
              <Button
                sx={{
                  width: 'fit-content',
                  height: '52px',
                  padding: '16px 24px',
                  gap: '8px',
                  borderRadius: '4px',
                  border: '1px solid #132B24',
                  backgroundColor: '#0D9786',
                  textTransform: 'none',
                  color: 'white',
                  fontFamily: 'Manrope',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '19.2px',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                  '@media (max-width: 600px)': {
                    width: '100%',
                    height: 'auto',
                    fontSize: '14px',
                  },
                  '&:hover': {
                    width: '191px',
                    backgroundColor: "#F2F8F7",
                    color: "#132B24",
                    border: "0"
                  },
                }}
                startIcon={<Lightning weight="fill" />}
                onClick={handleClickOpen}
                disableRipple
              >
                {JOIN_BETA_TEXT}
              </Button>
            </Box>
          )}
          {isMobile && (
            <Button
              sx={{
                width: 'fit-content',
                height: '46px',
                padding: '8px 12px',
                gap: '8px',
                borderRadius: '4px',
                border: '1px solid #132B24',
                backgroundColor: '#0D9786',
                textTransform: 'none',
                color: 'white',
                fontFamily: 'Manrope',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '19.2px',
                letterSpacing: '0.01em',
                textAlign: 'left',
                position: 'absolute',
                right: 12,
                top: 16,
                '&:hover': {
                  backgroundColor: '#096B5F',
                },
              }}
              startIcon={<Lightning weight="fill" />}
              onClick={handleClickOpen}
              disableRipple
            >
              {JOIN_BETA_TEXT}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <BetaDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Header;
