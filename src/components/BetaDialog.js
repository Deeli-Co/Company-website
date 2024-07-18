import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, IconButton, Button, Box, Typography, Avatar, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckCircle, FlashOn } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Image1 from "../assets/section10_2.svg";
import Image2 from "../assets/section10_4.svg";
import Image3 from "../assets/section10_3.svg";

const BetaDialog = ({ open, handleClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    jobFunction: '',
    otherInformation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://us-central1-immortal-407108.cloudfunctions.net/dashboard-notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          work_email: formData.workEmail,
          company: formData.company,
          job_function: formData.jobFunction,
          other_information: formData.otherInformation
        })
      });

      if (response.ok) {
        console.log('Success! Record added.');
        handleClose();
      } else {
        const error = await response.json();
        console.error('Failed to add record:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="xl" 
      fullWidth 
      fullScreen={isMobile}
      PaperProps={{ 
        sx: { 
          height: isMobile ? '100%' : '75%', 
          width: isMobile ? '100%' : '70%', 
          top: isMobile ? '0' : '-3%', 
        } 
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%' }}>
        <Box sx={{ width: isMobile ? '100%' : '50%', backgroundColor: '#E8F4F2', padding: isMobile ? 4: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <DialogTitle sx={{ padding: 0, textAlign: 'left' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, mt: 4}}>
              <Avatar alt="Person 1" src={Image1} sx={{ width: isMobile ? 32 : 56, height: isMobile ? 32 : 56, marginRight: '8px' }} />
              <Avatar alt="Person 2" src={Image2} sx={{ width: isMobile ? 32 : 56, height: isMobile ? 32 : 56, marginRight: '8px'}} />
              <Avatar alt="Person 2" src={Image3} sx={{ width: isMobile ? 32 : 56, height: isMobile ? 32 : 56 }} />
            </Box>
          </DialogTitle>
          <Box sx={{ width: '100%', textAlign: 'left' }}>
            <Typography variant="h4" sx={{ fontFamily: "Manrope", fontSize: isMobile ? '24px' : '40px', fontWeight: 600, lineHeight: isMobile ? '32px' : '38.25px', marginBottom: "20px"}}>
              {isMobile ? (
                <>
                  Join our Beta Invest in Next-Gen Tech Today
                </>
              ) : (
                <>
                  Join our Beta <br/> Invest in Next-Gen <br/> Tech Today
                </>
              )}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CheckCircle sx={{ color: '#0D9786', mr: 1 }} />
              <Typography sx={{ fontFamily: 'Aileron', fontSize: isMobile ? '14px' : '16px', fontWeight: isMobile ? 400 : 600, lineHeight: '20px', textAlign: 'left' }}>
                <strong style={{color: "#096B5F"}}>20X</strong> Faster at Identifying and Investing in New Technologies
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CheckCircle sx={{ color: '#0D9786', mr: 1 }} />
              <Typography sx={{ fontFamily: 'Aileron', fontSize: isMobile ? '14px' : '16px', fontWeight: isMobile ? 400 : 600, lineHeight: '20px', textAlign: 'left' }}>
                <strong style={{color: "#096B5F"}}>40%</strong> higher chance to meet innovators with hidden innovations
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CheckCircle sx={{ color: '#0D9786', mr: 1 }} />
              <Typography sx={{ fontFamily: 'Aileron', fontSize: isMobile ? '14px' : '16px', fontWeight: isMobile ? 400 : 600, lineHeight: '20px', textAlign: 'left' }}>
                <strong style={{color: "#096B5F"}}>18 Mon</strong> Tech Network Growth Fuels Investment Potential
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: isMobile ? '100%' : '50%', padding: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <DialogTitle sx={{ padding: 0 }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ padding: isMobile ? 0 : 4 }}>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', gap: 1, flexDirection: isMobile ? 'column' : 'row' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography>First name*</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#0EA996', // Change border color on focus
                        },
                      },
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography>Last name*</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#0EA996', // Change border color on focus
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ mb: 0.5 }}>
                <Typography>Work Email*</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    }}}
                />
              </Box>
              <Box sx={{ mb: 0.5 }}>
                <Typography>Company*</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    }}
                  }
                />
              </Box>
              <Box sx={{ mb: 0.5 }}>
                <Typography>Job Function*</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="jobFunction"
                  value={formData.jobFunction}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    }}
                  }
                />
              </Box>
              <Box sx={{ mb: 0.5 }}>
                <Typography>Other Information</Typography>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  name="otherInformation"
                  value={formData.otherInformation}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    }}
                  }
                />
              </Box>
              <Button
                type="submit"
                disableRipple
                sx={{
                  mt: 0.5,
                  width: '100%',
                  height: '52px',
                  padding: '16px 24px',
                  gap: '8px',
                  borderRadius: '4px',
                  border: '1px solid #132B24',
                  backgroundColor: '#0D9786',
                  color: 'white',
                  opacity: 1,
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  textTransform: 'none',
                  fontSize: "16px",
                  '&:hover': {
                    backgroundColor: '#096B5F',
                    color: 'white',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Ensuring box shadow also remains the same
                  },
                }}
                startIcon={<FlashOn />}
              >
                Join Beta Now
              </Button>
            </Box>
          </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
};

export default BetaDialog;
