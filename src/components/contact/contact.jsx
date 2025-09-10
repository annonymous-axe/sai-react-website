import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import contactUSBG from '/contact-us.jpg';
import OfficeMap from './officeMap';
import TypeWritter from '../typewritter';

function Contact(){

    return (
        <Box
            sx={{
                position: 'relative',               
                color: 'white'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${contactUSBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Or 'contain', 'auto', or specific dimensions
                    backgroundPosition: 'center', // Or 'top', 'bottom', 'left', 'right', or specific coordinates
                    height: '90vh', // Example height
                    width: '100%', // Example width
                    filter: `brightness(60%)`
                }}
            />
            <Typography
                variant='body1'
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '46%',
                }}
            >Contact US</Typography>
            <TypeWritter sxProp={{
                    position: 'absolute',
                    top: '17%',
                    left: '35%',
                }} text="Get in Touch Now." />

            <Container>
                <Grid spacing={1} container sx={{mb: 2, mt: 2, color: 'text.primary'}}>
                    <Grid size={4} sx={{mt: 10}}>
                      <Typography variant='h2'
                        sx={{
                            animation: 'typing 4s steps(22) forwards, blink-caret .75s step-end infinite alternate'
                        }}
                      >Your voice matters, we're here to listen.</Typography>
                    </Grid>
                    <Grid size={8}>
                        
                        <Box
                            sx={{
                                padding: 10
                            }}
                        >
                            <Typography
                                sx={{
                                    mb: 2
                                }}    
                            >Name <span style={{color: 'red'}}>*</span> </Typography>
                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <TextField 
                                        variant='outlined'
                                        label="First Name"
                                        color='text.primary'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid size={6}>
                                    <TextField 
                                        variant='outlined'
                                        label="Last Name"
                                        color='text.primary'
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <Typography
                                        sx={{
                                            mb: 2,
                                            mt: 2
                                        }}    
                                    >Mobile <span style={{color: 'red'}}>*</span> </Typography>
                                            <TextField 
                                                variant='outlined'
                                                label="ex. (123-456-7890)"
                                                color='text.primary'    
                                                fullWidth
                                            />
                                </Grid>
                                <Grid size={6}>
                                    <Typography
                                        sx={{
                                            mb: 2,
                                            mt: 2
                                        }}    
                                    >Email </Typography>
                                            <TextField 
                                                variant='outlined'
                                                label="ex. (example@doamin.com)"
                                                color='text.primary'    
                                                fullWidth
                                            />
                                </Grid>
                            </Grid>
                            <Grid container sx={{mb: 5}}>
                                <Typography
                                    sx={{
                                        mb: 2,
                                        mt: 2
                                    }}
                                >Message <span style={{color: 'red'}}>*</span></Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    color='text.primary'
                                    rows={4}
                                    maxRows={10}
                                    label='Enter message for us...'
                                />
                            </Grid>
                            
                            <Button color='text.primary' variant='outlined'>Send</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid spacing={1} container sx={{mb: 2, color: 'text.primary'}}>
                    <Typography variant='h4'>Find Us</Typography>
                    <Grid size={12}>
                        <OfficeMap/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;