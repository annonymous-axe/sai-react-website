import { Paper, Typography, Divider } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ParagraphCard() {
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
          borderRadius: 4,
        }}
      >
        {/* Section 1 */}
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "left", mb: 2, color: "primary.main" }}
        >
          What is Structural Engineering?
        </Typography>
        <Divider sx={{ mb: 3, width: "100%", mx: "auto" }} />

        <Typography
          sx={{ mb: 4, lineHeight: 1.8, textAlign: "justify", color: "text.secondary" }}
          variant="body1"
        >
          For any human being to perform mentally or physically, the body internally
          must be in that capacity to perform. Similar is the case for buildings /
          structures. If we want our structures / buildings to perform in any situations
          in terms of functionality, serviceability, strength etc. the structure internally
          shall be of that capacity and calibre. And for that STRUCTURAL ENGINEERING is required.
        </Typography>

        <Typography
          sx={{ mb: 4, lineHeight: 1.8, textAlign: "justify", color: "text.secondary" }}
          variant="body1"
        >
          Structural Engineering is an Art & Science of Designing Structures with Safety,
          Economy, Durability & Serviceability. The end product shall be such that it should
          cater all above mentioned criterias with minimal maintenance for considerable period
          of time.
        </Typography>

        <Typography
          sx={{ mb: 4, lineHeight: 1.8, textAlign: "justify", color: "text.secondary" }}
          variant="body1"
        >
          The entire exercise requires conceptual thinking based on Structural Engineering
          principles as well as acceptable behavior & performance of the building during
          normal functional usage as well as during extreme catastrophic events like Earthquake,
          Cyclone etc. adhering to the latest Codal provisions.
        </Typography>

        <div id="service-section"></div>
      </Paper>
    </motion.div>
  );
}

export default ParagraphCard;
