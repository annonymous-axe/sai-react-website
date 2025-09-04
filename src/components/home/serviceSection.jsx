
import { Typography, Divider, Stack, Chip, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


function ServiceSection() {
  const services = [
    "STRUCTURAL ENGINEERING",
    "VALUE ENGINEERING",
    "REPAIR REHABILITATION",
    "RETROFITTING OF HERITAGE STRUCTURE",
    "NON-DESTRUCTIVE TESTING",
    "QUANTITY SURVEY",
    "VALUATION",
    "PROOF CHECKING / PEER REVIEWING DESIGN",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"})  

  return (
    
      <motion.div
        ref={ref}
        initial= {{opacity: 0, y: 50}}
        animate= {isInView ? {opacity: 1, y: 0}: {}}
        transition={{duration: 0.8, ease: "easeOut"}}
      >
        
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            maxWidth: "1350px",
            margin: "4rem auto",
            borderRadius: 4
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: "left", mb: 2, color: "primary.main" }}
          >
            What We Do?
          </Typography>
          <Divider sx={{ mb: 4, width: "100%", mx: "auto" }} />

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            sx={{ mt: 2 }}
          >
            {services.map((label, i) => (
              <Chip
                key={i}
                label={label}
                variant="outlined"
                sx={{
                  px: 2.5,
                  py: 1.2,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  borderRadius: "10px",
                  borderWidth: "2px",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "#fff",
                    borderColor: "primary.main",
                    transform: "translateY(-2px)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              />
            ))}
          </Stack>
        </Paper>
      </motion.div>
  );
}

export default ServiceSection;
