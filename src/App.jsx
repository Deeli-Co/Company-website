import React, { useState, useEffect, useRef } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Footer from "./components/Footer";
import CombinedSection from "./components/CombinedSection";
import BetaDialog from "./components/BetaDialog";
import ReactGA from "react-ga4";

function App() {
	const [open, setOpen] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const scrollAdjustedRef = useRef(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	useEffect(() => {
		ReactGA.initialize("G-1YCT5RF94M");
		ReactGA.send("pageview");
	}, []);

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
			{isMobile ? (
				<>
					<Section5 />
					<Section6 />
					<Section7 />
				</>
			) : (
				<CombinedSection />
			)}
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
