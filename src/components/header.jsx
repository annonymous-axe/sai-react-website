import { AppBar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import saiLogo from '/LOGO.png'
import { useNavigate } from "react-router-dom";

const navItems = ["Home", "About", "Projects", "Service", "Contact"];

const Header = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleDrawerToggle(){
       setOpen(!open);
    }

    function handleNavigation(link){

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: for a smooth scrolling animation
        });        
        
        if(link === 'Home'){
            navigate("/");
        }else if(link === 'Service'){
            navigate("/");
            document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
        }else if(link === 'Projects'){
            navigate("/projects");
        }else if(link === 'Contact'){
            navigate("/contact");
        }else if(link === 'About'){
            navigate("/about");
        }
    }

    const menuList = (
        <ClickAwayListener onClickAway={() => {setOpen(false)}}>
            <Box sx={{width: 240}} role="presentation">
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </ClickAwayListener>
    );

    return (
        <Box sx={{display: 'flex', mb: 8}}>
            <AppBar
                position="fixed"
                elevation={ 4 }
                sx={{
                    backgroundColor: "primary"
                }}
        >

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open-drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display:{sm:"none"}}}
                    >
                        
                        <MenuIcon></MenuIcon>

                    </IconButton>
                    <Typography
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        <img src={saiLogo} className="logo" alt="Vite logo" width={200} />
                        {/* SAI Consultant */}
                    </Typography>
        
                    <Box
                        sx={{display: {sm: 'block', xs: 'none'}}}
                    >
                        {navItems.map((item) => (
                            <Button key={item} sx={{color: "text.primary"}} variant="text" onClick={() => {handleNavigation(item)}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>

            </AppBar>
            <Drawer open={open}>
                {menuList}
            </Drawer>
        </Box>
    );
}

export default Header;