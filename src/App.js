import React, { useState} from 'react';
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";
// import Section6 from "./components/Section6";
// import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Footer from "./components/Footer";
// import section5Image from './assets/section5_1.svg';
// import section6Image from './assets/section6_1.svg';
import CombinedSection from './components/CombinedSection';
import BetaDialog from './components/BetaDialog';

const App = () => {
  // const [currentImage, setCurrentImage] = useState(section5Image);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section6 = document.getElementById('section6');
  //     if (section6) {
  //       const section6Top = section6.offsetTop;
  //       const section6Height = section6.offsetHeight;
  //       const middleOfSection6 = section6Top + (section6Height / 2);
  //       const scrollPosition = window.scrollY + window.innerHeight;

  //       if (scrollPosition >= middleOfSection6) {
  //         setCurrentImage(section6Image);
  //       } else {
  //         setCurrentImage(section5Image);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
