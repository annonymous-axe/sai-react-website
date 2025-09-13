// Sliders.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { EffectFade } from "swiper/modules";

function Sliders() {
  const slides = [
    { src: "images/projects/HOME/AHANA.jpg", text: "Designing the Future", quote: "Excellence in Structural Engineering" },
    { src: "images/projects/HOME/business_hub.jpg", text: "Innovative Architecture", quote: "Architecture is a visual art and the buildings speak for themselves." },
    { src: "images/projects/HOME/kiran_hospital.jpg", text: "Sustainable Structures", quote: "The difference between good and bad architecture is the time you spend on it" },
    { src: "images/projects/HOME/kiran_medical_college.jpg", text: "Designing Tomorrow, Today", quote: "Designing dreams into reality" }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect="fade"
      loop
      style={{ height: "100vh" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              width: "100%",
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, letterSpacing: 1, mb: 1 }}
              >
                {slide.text}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {slide.quote}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Sliders;
