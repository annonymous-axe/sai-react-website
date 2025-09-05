import { AppBar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, ClickAwayListener } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import saiLogo from '/image.svg'

const navItems = ["Home", "About", "Service", "Contact"];

const Header = () => {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);   

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleDrawerToggle(){
       setOpen(!open);
    }

    function handleNavigation(link){
        
        if(link === 'Service'){
            document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
        }
    }

    const menuList = (
        <ClickAwayListener onClickAway={() => {setOpen(false)}}>
            <Box sx={{width: 240}} role="presentation">
                <List>
                    {navItems.map((item, index) => (
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
                    backgroundColor: "primary",
                    transition: "background-color 0.3s ease"
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
                        variant="h6"
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
                            <Button key={item} sx={{color: "text.primary"}} variant="texted" onClick={() => {handleNavigation(item)}}>
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