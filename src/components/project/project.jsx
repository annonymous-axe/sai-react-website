import { Box, Typography } from "@mui/material";
import Typewriter from "../typewritter";
import ProjectBG from '/project-top.jpg';
import ProjectList from "./projectList";
import { useEffect } from "react";


function Projects(){

    return (
        <Box
            sx={{
                position: 'relative',               
                color: 'white'
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${ProjectBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // Or 'contain', 'auto', or specific dimensions
                    backgroundPosition: 'center', // Or 'top', 'bottom', 'left', 'right', or specific coordinates
                    height: '90vh', // Example height
                    width: '100%', // Example width
                    filter: `brightness(60%)`
                }}
            />
            <Typography variant="h3" sx={{
                    position: 'absolute',
                    top: '6%',
                    left: '40%',
                }} >Our Projects</Typography>

            <Box 
                sx={{
                    
                }}
            >
                <ProjectList />
            </Box>
        </Box>
    );
}

export default Projects;