import React, { useState, useEffect, useRef } from 'react';
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Footer from "./components/Footer";
import CombinedSection from './components/CombinedSection';
import BetaDialog from './components/BetaDialog';

const App = () => {
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollAdjustedRef = useRef(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (!scrollAdjustedRef.current && scrollTop > lastScrollY) {
      const newScrollTop = scrollTop + (scrollTop * 0.15);
      window.scrollTo({
        top: newScrollTop,
        behavior: 'smooth'
      });
      scrollAdjustedRef.current = true;
    }
    setLastScrollY(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header handleClickOpen={handleClickOpen} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CombinedSection />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
      <BetaDialog open={open} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default App;
