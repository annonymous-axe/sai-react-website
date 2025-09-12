import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import { Info } from "@mui/icons-material";

function ProjectList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // All possible categories
  const categories = ["All", "Bunglow", "Commercial", "High Rise", "Hospital", "Institutional", "Offices", "Resort", "Town Ship"];

  // Add categories to your items
  const itemData = [
    {
      img: "/images/projects/AJAY LAKHWALA BUNGLOW.jpg",
      title: "AJAY LAKHWALA BUNGLOW",
      location: "Surat",
      category: "Bunglow",
    },
    {
      img: "images/projects/DHOLAKIYA FARM - SURAT - SRK GROUP.jpg",
      title: "DHOLAKIYA FARM - SRK GROUP",
      location: "Surat",
      category: "Bunglow",
    },
    {
      img: "/images/projects/SHREEJI HOUSE - SURAT - SHREEJI CORPORATION.jpeg",
      title: "SHREEJI HOUSE",
      location: "Surat",
      category: "Nature",
    },
    {
      img: "/images/projects/SONOROUS - VAPI .jpg",
      title: "SONOROUS",
      location: "Vapi",
      category: "Food",
    },
    {
      img: "/images/projects/SOUL BAY - SURAT - GAURANG UPADHYAY.png",
      title: "SOUL BAY",
      location: "Surat",
      category: "Sports",
    },
    {
      img: "/images/projects/VIBRANT SITA - INDORE - VIBRANT DEVELOPERS.png",
      title: "VIBRANT SITA",
      location: "Indore",
      category: "Food",
    }
  ];

  // Filter items by category
  const filteredItems =
    selectedCategory === "All"
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  return (
    <Box>
      {/* Category Filter Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          color: "textPrimary",
          mb: 3,
          mt: 5
        }}
      >
        {categories.map((cat) => (

            <Chip 
                key={cat}
                variant={selectedCategory === cat ? "filled" : "outlined"}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: 600,
                    color: "black"
                }} 
                label={cat}
            />

            
        ))}
      </Box>
      <Divider sx={{width: 900, marginLeft: 40 }} />

      {/* Image List */}
      <ImageList sx={{ width: 1200, ml: 25 }} cols={3}>
        {/* <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">Projects</ListSubheader>
        </ImageListItem> */}

        {filteredItems.map((item) => (
          <ImageListItem key={item.title} cols={1}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.location}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <Info />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ProjectList;
