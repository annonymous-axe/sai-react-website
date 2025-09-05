import { Box, Container, Grid, Typography, Link, IconButton, Button } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        pt: 8,
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Hire Us Section */}
        <Grid container spacing={6} justifyContent="center" sx={{mb: 5}}>
          {/* Quick Links */}
          <Grid item xs={12} sm={4} sx={{textAlign: 'center'}}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Have Any Project in Mind?
            </Typography>
            <Typography variant="p" sx={{display: 'block', mb: 2}}>we are eager to listen your thought.</Typography>
            
            <Button href="#" color="inherit" variant="contained">Hire US</Button>
            
          </Grid>

        </Grid>        
        {/* Top Section */}
        <Grid container spacing={6} justifyContent="center">
          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">Home</Link>
              <Link href="#" color="inherit" underline="hover">Services</Link>
              <Link href="#" color="inherit" underline="hover">About</Link>
              <Link href="#" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}><FmdGoodIcon sx={{fontSize: 'medium'}} />  20- Ishwarkunj Society,Opp. SMC Sports Complex, Anandmahal road, Adajan,surat -395009</Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}><LocalPhoneIcon sx={{fontSize: 'medium'}}/> +91 98791 09464</Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}><LocalPhoneIcon sx={{fontSize: 'medium'}}/> +91 63546 00480</Typography>
            <Typography variant="body2"><MarkunreadIcon sx={{fontSize: 'medium'}} /> admin@sai-consultants.com</Typography>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <IconButton color="inherit" href="#" sx={{ "&:hover": { color: "#3b82f6" } }}>
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="#" sx={{ "&:hover": { color: "#0a66c2" } }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          mt={6}
          pt={3}
          sx={{
            borderTop: "1px solid #334155",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "gray.400" }}>
            Copyright © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
