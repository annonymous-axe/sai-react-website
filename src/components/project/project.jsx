import { Box, Typography } from "@mui/material";
import Typewriter from "../typewritter";
import ProjectBG from '/project-top.jpg';
import ProjectList from "./projectList";


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
            <Typewriter sxProp={{
                    position: 'absolute',
                    top: '10%',
                    left: '40%',
                }} text="Our Projects" />

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