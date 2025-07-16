import React, { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  useMediaQuery, 
  CircularProgress,
  AppBar,
  Toolbar,
  Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowLeft } from "phosphor-react";
import ReactMarkdown from "react-markdown";
import Logo from "../assets/logo.svg";

const TermsOfService = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the terms of service markdown file
    const loadTerms = async () => {
      try {
        const response = await fetch("/terms-of-service.md");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        setTermsContent(content);
      } catch (error) {
        console.error("Error loading terms of service:", error);
        // Fallback content if markdown file is not found
        setTermsContent(`# Terms of Service

**Last Updated:** ${new Date().toLocaleDateString()}

Welcome to Deeli AI. These Terms of Service govern your use of our website and services.

## 1. Acceptance of Terms

By accessing or using our Service, you agree to be bound by these Terms.

## 2. Description of Service

Deeli AI provides AI-powered insights and analytics services designed to help businesses understand trends and make data-driven decisions.

## 3. Contact Information

If you have any questions about these Terms, please contact us at support@deeli.ai.

---

*Please note: This is fallback content. The full terms of service should be loaded from the markdown file.*`);
      } finally {
        setLoading(false);
      }
    };

    loadTerms();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const markdownComponents = {
    h1: ({ children }) => (
      <Typography
        variant="h1"
        sx={{
          fontSize: isMobile ? "2rem" : "2.5rem",
          fontWeight: 700,
          color: "#132B24",
          marginBottom: "1.5rem",
          marginTop: "2rem",
          fontFamily: "Manrope",
        }}
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h2"
        sx={{
          fontSize: isMobile ? "1.5rem" : "2rem",
          fontWeight: 600,
          color: "#132B24",
          marginBottom: "1rem",
          marginTop: "2rem",
          fontFamily: "Manrope",
        }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h3"
        sx={{
          fontSize: isMobile ? "1.25rem" : "1.5rem",
          fontWeight: 600,
          color: "#132B24",
          marginBottom: "0.75rem",
          marginTop: "1.5rem",
          fontFamily: "Manrope",
        }}
      >
        {children}
      </Typography>
    ),
    p: ({ children }) => (
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "#333333",
          marginBottom: "1rem",
          fontFamily: "Aileron",
        }}
      >
        {children}
      </Typography>
    ),
    ul: ({ children }) => (
      <Box
        component="ul"
        sx={{
          paddingLeft: "1.5rem",
          marginBottom: "1rem",
          "& li": {
            marginBottom: "0.5rem",
            color: "#333333",
            fontFamily: "Aileron",
          },
        }}
      >
        {children}
      </Box>
    ),
    ol: ({ children }) => (
      <Box
        component="ol"
        sx={{
          paddingLeft: "1.5rem",
          marginBottom: "1rem",
          "& li": {
            marginBottom: "0.5rem",
            color: "#333333",
            fontFamily: "Aileron",
          },
        }}
      >
        {children}
      </Box>
    ),
    strong: ({ children }) => (
      <Typography
        component="strong"
        sx={{
          fontWeight: 600,
          color: "#132B24",
        }}
      >
        {children}
      </Typography>
    ),
    em: ({ children }) => (
      <Typography
        component="em"
        sx={{
          fontStyle: "italic",
          color: "#555555",
        }}
      >
        {children}
      </Typography>
    ),
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          color: "#132B24",
        }}
      >
        <Toolbar>
          <Button
            startIcon={<ArrowLeft size={20} />}
            onClick={handleBack}
            sx={{
              color: "#132B24",
              textTransform: "none",
              fontFamily: "Aileron",
              fontSize: "1rem",
            }}
          >
            Back
          </Button>
          <Box 
            sx={{ 
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              loading="lazy"
              src={Logo}
              alt="Logo"
              style={{
                height: 33.28,
                width: 105.42,
              }}
            />
          </Box>
          <Box sx={{ width: "80px" }} /> {/* Spacer for centering */}
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="md"
        sx={{
          paddingTop: "2rem",
          paddingBottom: "3rem",
          paddingX: isMobile ? "1rem" : "2rem",
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
            }}
          >
            <CircularProgress sx={{ color: "#096B5F" }} />
          </Box>
        ) : (
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: isMobile ? "1.5rem" : "2rem",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ReactMarkdown components={markdownComponents}>
              {termsContent}
            </ReactMarkdown>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TermsOfService;