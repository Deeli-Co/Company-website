import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Button,
  Box,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CheckCircle, FlashOn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Image1 from "../assets/section10_2.svg";
import Image2 from "../assets/section10_4.svg";
import Image3 from "../assets/section10_3.svg";
import { SpinnerGap } from "phosphor-react";

const BetaDialog = ({ open, handleClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    jobFunction: "",
    otherInformation: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const fieldsRef = {
    firstName: useRef(null),
    lastName: useRef(null),
    workEmail: useRef(null),
    company: useRef(null),
    jobFunction: useRef(null),
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.workEmail &&
      formData.company &&
      formData.jobFunction &&
      validateEmail(formData.workEmail)
    );
  };

  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError("");

    if (!validateForm()) {
      setValidationError("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://us-central1-immortal-407108.cloudfunctions.net/dashboard-notion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            work_email: formData.workEmail,
            company: formData.company,
            job_function: formData.jobFunction,
            other_information: formData.otherInformation,
          }),
        }
      );

      if (response.ok) {
        console.log("Success! Record added.");
        setIsSubmitted(true);
      } else {
        const error = await response.json();
        console.error("Failed to add record:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const handleDialogClose = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      company: "",
      jobFunction: "",
      otherInformation: "",
    });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      maxWidth="xl"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          height: isMobile ? "100%" : "90%",
          width: isMobile ? "100%" : "85%",
          top: isMobile ? (isSubmitted ? "20%" : "0") : "0%",
          padding: isMobile ? "0" : "0",
          borderRadius: isMobile ? (isSubmitted ? "1%" : "0") : "0",
          opacity: isMobile ? "1" : "1",
          margin: isMobile ? '"0 auto"' : "initial",
          backgroundColor: isMobile ? "#F2F8F7" : "#FFFFFF",
          overflow: isMobile? "none" : "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          height: "100%",
        }}
      >
        {isSubmitted ? (
          <Box
            sx={{
              width: isMobile ? "100%" : "100%",
              height: isMobile ? "100%" : "auto",
              padding: isMobile ? "24px 20px" : "4",
              gap: isMobile ? "16px" : "0",
              borderRadius: isMobile ? "8px 8px 0px 0px" : "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: isMobile ? "flex-start" : "center",
              alignItems: "center",
              backgroundColor: "#F2F8F7",
              mt: isMobile ? 10 : 0,
            }}
          >
            <DialogTitle sx={{ padding: 0 }}>
              <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <CheckCircle
              sx={{ color: "#096B5F", fontSize: isMobile ? 104 : 84, mb: 2 }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Manrope",
                fontSize: isMobile ? "24px" : "40px",
                fontWeight: 600,
                textAlign: "center",
                mb: 2,
                color: "#132B24",
              }}
            >
              Thank you for your interest in Deeli.ai!
            </Typography>
            <Typography
              sx={{
                width: isMobile ? "335px" : "763px",
                fontFamily: "Aileron",
                fontSize: isMobile ? "14px" : "16px",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              We'll review your application and contact you shortly to invite
              you to participate in our beta testing program. We're excited to
              have you try out our innovative AI platform and look forward to
              your valuable feedback.
            </Typography>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                width: isMobile ? "100%" : "50%",
                backgroundColor: "#E8F4F2",
                padding: isMobile ? 4 : 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <DialogTitle
                sx={{ padding: 0, textAlign: "left", marginBottom: "10px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    mb: 2,
                    mt: 4,
                  }}
                >
                  <Avatar
                    alt="Person 1"
                    src={Image1}
                    sx={{
                      width: isMobile ? 32 : 56,
                      height: isMobile ? 32 : 56,
                      marginRight: "8px",
                    }}
                  />
                  <Avatar
                    alt="Person 2"
                    src={Image2}
                    sx={{
                      width: isMobile ? 32 : 56,
                      height: isMobile ? 32 : 56,
                      marginRight: "8px",
                    }}
                  />
                  <Avatar
                    alt="Person 2"
                    src={Image3}
                    sx={{
                      width: isMobile ? 32 : 56,
                      height: isMobile ? 32 : 56,
                    }}
                  />
                </Box>
              </DialogTitle>
              <Box sx={{ width: "100%", textAlign: "left" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: isMobile ? "24px" : "40px",
                    fontWeight: 600,
                    lineHeight: isMobile ? "32px" : "54.25px",
                    marginBottom: "20px",
                  }}
                >
                  {isMobile ? (
                    <>Join our Beta Invest in Next-Gen Tech Today</>
                  ) : (
                    <>
                      Join our Beta <br /> Invest in Next-Gen <br /> Tech Today
                    </>
                  )}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircle sx={{ color: "#0D9786", mr: 1 }} />
                  <Typography
                    sx={{
                      fontFamily: "Aileron",
                      fontSize: isMobile ? "14px" : "16px",
                      fontWeight: isMobile ? 400 : 600,
                      lineHeight: "20px",
                      textAlign: "left",
                    }}
                  >
                    <strong style={{ color: "#096B5F" }}>20X</strong> Faster at
                    Identifying and Investing in New Technologies
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircle sx={{ color: "#0D9786", mr: 1 }} />
                  <Typography
                    sx={{
                      fontFamily: "Aileron",
                      fontSize: isMobile ? "14px" : "16px",
                      fontWeight: isMobile ? 400 : 600,
                      lineHeight: "20px",
                      textAlign: "left",
                    }}
                  >
                    <strong style={{ color: "#096B5F" }}>40%</strong> higher
                    chance to meet innovators with hidden innovations
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircle sx={{ color: "#0D9786", mr: 1 }} />
                  <Typography
                    sx={{
                      fontFamily: "Aileron",
                      fontSize: isMobile ? "14px" : "16px",
                      fontWeight: isMobile ? 400 : 600,
                      lineHeight: "20px",
                      textAlign: "left",
                    }}
                  >
                    <strong style={{ color: "#096B5F" }}>18 Mon</strong> Tech
                    Network Growth Fuels Investment Potential
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: isMobile ? "100%" : "50%",
                padding: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: isMobile? "none" : "hidden",
              }}
            >
              <DialogTitle sx={{ padding: 0 }}>
                <IconButton
                  aria-label="close"
                  onClick={handleDialogClose}
                  sx={{
                    position: "absolute",
                    right: 16,
                    top: 16,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent
                sx={{ padding: isMobile ? 0 : 5, overflow: "hidden" }}
              >
                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  onSubmit={handleSubmit}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      flexDirection: isMobile ? "column" : "row",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography>First name*</Typography>
                      <TextField
                        variant="outlined"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        fullWidth
                        inputRef={fieldsRef.firstName}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "#0EA996", // Change border color on focus
                            },
                          },
                          "& .MuiInputBase-root": {
                            height: "52px",
                            // width: "252px"
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography>Last name*</Typography>
                      <TextField
                        variant="outlined"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        inputRef={fieldsRef.lastName}
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "#0EA996", // Change border color on focus
                            },
                          },
                          "& .MuiInputBase-root": {
                            height: "52px",
                            // width: "252px"
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mb: 0 }}>
                    <Typography>Work Email*</Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      inputRef={fieldsRef.workEmail}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#0EA996", // Change border color on focus
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ mb: 0 }}>
                    <Typography>Company*</Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      inputRef={fieldsRef.company}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#0EA996", // Change border color on focus
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ mb: 0 }}>
                    <Typography>Job Function*</Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="jobFunction"
                      value={formData.jobFunction}
                      onChange={handleChange}
                      inputRef={fieldsRef.jobFunction}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#0EA996", // Change border color on focus
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ mb: 0.5 }}>
                    <Typography>Other Information</Typography>
                    <TextField
                      variant="outlined"
                      multiline
                      rows={2}
                      fullWidth
                      name="otherInformation"
                      value={formData.otherInformation}
                      onChange={handleChange}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#0EA996", // Change border color on focus
                          },
                        },
                      }}
                    />
                  </Box>
                  <Button
                    type="submit"
                    disableRipple
                    disabled={isButtonDisabled}
                    sx={{
                      mt: 0.5,
                      width: "100%",
                      height: "52px",
                      padding: "16px 24px",
                      gap: "8px",
                      borderRadius: "4px",
                      border: isButtonDisabled ? "none" : "1px solid #132B24",
                      backgroundColor: isButtonDisabled ? "#F2F8F7" : "#0D9786",
                      color: "white",
                      opacity: 1,
                      // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      textTransform: "none",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: isButtonDisabled
                          ? "#F2F8F7"
                          : "#096B5F",
                        color: "white",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Ensuring box shadow also remains the same
                      },
                    }}
                    startIcon={loading ? null : <FlashOn />}
                  >
                    {loading ? (
                      <SpinnerGap
                        size={24}
                        color="#FFFFFF"
                        style={{ animation: "spin 1s linear infinite" }}
                      />
                    ) : (
                      "Join Beta Now"
                    )}
                  </Button>
                  <style>
                    {`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                      @keyframes shake {
                        0%, 100% { transform: translateX(0); }
                        25% { transform: translateX(-5px); }
                        50% { transform: translateX(5px); }
                        75% { transform: translateX(-5px); }
                      }
                    `}
                  </style>
                </Box>
              </DialogContent>
            </Box>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default BetaDialog;
