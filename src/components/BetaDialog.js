import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, IconButton, Button, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CheckCircle, FlashOn } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Image1 from "../assets/section10_2.svg";
import Image2 from "../assets/section10_4.svg";

const BetaDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth PaperProps={{ sx: { height: '823px', top: '15px' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <Box sx={{ width: '50%', backgroundColor: '#E8F4F2', padding: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <DialogTitle sx={{ padding: 0, textAlign: 'left' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, paddingLeft: "15px"}}>
              <Avatar alt="Person 1" src={Image1} sx={{ width: 56, height: 56, marginRight: '8px' }} />
              <Avatar alt="Person 2" src={Image2} sx={{ width: 56, height: 56 }} />
            </Box>
          </DialogTitle>
          <Box sx={{ width: '100%', textAlign: 'left', paddingLeft: '16px', paddingRight: '16px' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Aileron', fontSize: '40px', fontWeight: 600, lineHeight: '54px', mb: 2 }}>
              Join our Beta
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Aileron', fontSize: '40px', fontWeight: 600, lineHeight: '54px', mb: 4 }}>
              Invest in Next-Gen Tech Today
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CheckCircle sx={{ color: '#0D9786', mr: 1 }} />
              <Typography>
                <strong>20X</strong> Faster at Identifying and Investing in New Technologies
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CheckCircle sx={{ color: '#0D9786', mr: 1 }} />
              <Typography>
                <strong>40%</strong> higher chance to meet innovators with hidden innovations
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CheckCircle sx={{ color: '#0D9786', mr: 1 }} />
              <Typography>
                <strong>18 Mon</strong> Tech Network Growth Fuels Investment Potential
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '50%', padding: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
          <DialogContent>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ mb: 1 }}>First name*</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
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
                  <Typography sx={{ mb: 1 }}>Last name*</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
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
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1 }}>Work Email*</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1 }}>Company*</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1 }}>Job Function*</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1 }}>Other Information</Typography>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#0EA996', // Change border color on focus
                      },
                    },
                  }}
                />
              </Box>
              <Button
                variant="contained"
                disableRipple
                sx={{
                  mt: 2,
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
