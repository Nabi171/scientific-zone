
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box sx={{ background: '#111', color: '#f0fff1', pt: '5%' }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h5'>
                            NURS ZONE
                        </Typography>
                        <Box sx={{ my: '5%' }}>
                            <Typography variant='h6'>
                                About us
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Thanks for visiting my site,Basically i am a Robotic Engineer.I compelted my Engnr. deg from CUET(EEE).I in my Scientific Zone you will get all kinds of Scientific instruments.I specially work for those type of people who can not walk,talk or move.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography variant='h6'>
                            Social Links
                        </Typography>
                        <Box sx={{ display: 'flex', width: '75%', justifyContent: 'space-around', mt: '5%' }}>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6'>
                            Navigate
                        </Typography>
                        <Typography variant='body1'>
                            <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                                <li>Home</li>
                                <li>Privacy</li>
                                <li>Blogs</li>
                                <li>About</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
                <div>
                    <span className='text-center'> &Copyright: NURS SCIENTIFIC PARK| {new Date().getFullYear()}</span>
                </div>
            </Container>
        </Box >
    );
};

export default Footer;