import { Box, Grid, Typography } from '@mui/material';
import AboutUs from './profileDetailsTimeLine';



function About(){

    const founderDetails = {
        image: '/founder.jpeg',
        name: 'Er. Hiren G. Desai',
        position: 'Founder',
        work: 'Principal Structural Design Engineer',
        experience: 'Founder of Sai Consultants, established in 1990, with over 30 years of experience in delivering quality Structural Design solutions for various types of structures.',
        qualification: 'Bachelor of Civil Engineering (1986) & Master of Engineering in Structural Engineering (2000), SVNIT, Surat.',
        recognizionList: <ul className='ul-list' style={{marginTop: '13px'}}>
                            <li>Certificate of Merit for Kiran Hospital, 2020 - ICI UltraTech Awards (Regional)</li>
                            <li>Certificate of Merit for Shyam Villa, 2013 - ICEA UltraTech Awards</li>
                            <li>Life Member - Institute of Engineers (India), Indian Concrete Institute, and Indian Geotechnical Society</li>
                            <li>Life Member - Maharashtra India Chapter of ACI & Institute of Valuers</li>
                            <li>Registered Government Valuer</li>
                            <li>Panel Structural Engineer & Expert for Surat Municipal Corporation</li>
                            <li>Panel Valuer for Bank of Baroda & Sutex Bank</li>
                            <li>Licensed Structural Designer for Surat, Navsari, Vapi</li>
                        </ul>,
        affliationList: <ul className='ul-list' style={{marginTop: '13px'}}>
                            <li>Life Member - Institute of Engineers (India), Indian Concrete Institute, and Indian Geotechnical Society</li>
                            <li>Life Member - Maharashtra India Chapter of ACI & Institute of Valuers</li>
                            <li>Registered Government Valuer</li>
                            <li>Panel Structural Engineer & Expert for Surat Municipal Corporation</li>
                            <li>Panel Valuer for Bank of Baroda & Sutex Bank</li>
                            <li>Licensed Structural Designer for Surat, Navsari, Vapi</li>
                        </ul>
    }

    const coFounderDetails = {
        image: '/coFounder.jpeg',
        name: 'Er. Kush K. Shah',
        position: 'Co-Founder',
        work: 'Head Project Co-Ordinator & Structural Design Engineer Associate',        
        experience: 'Former Graduate Structural Engineer in WS ATKINS(India) Pvt. Ltd. in the Nuclear Buildings Department.',
        qualification: 'M.Tech(Structural Engineering Design) - CEPT University, A.M.I.E'
    }    

    return (
        <Box
            sx={{
                mb: 20,               
                color: 'white'                
            }}
        >

            <Typography
                variant='h1'
                sx={{
                    mt: 15,
                    ml: 55,
                    color: 'text.primary',
                    opacity: 0.1,
                    userSelect: 'none',
                    letterSpacing: 15,
                    wordSpacing: 10
                }}
            >ABOUT US</Typography>

            
            <Grid container spacing={2} sx={{padding: 2}}>
            
                <Grid size={10} sx={{padding: 10}}>
                    {/* <Paper> */}
                        <AboutUs details={founderDetails}/>
                    {/* </Paper> */}
                </Grid>
                <Grid size={10} sx={{paddingTop: 2, paddingLeft: 10}}>
                    {/* <Paper> */}
                        <AboutUs details={coFounderDetails}/>
                    {/* </Paper> */}
                </Grid>
            
            </Grid>
        

        </Box>

    );
}

export default About;