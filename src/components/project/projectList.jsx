import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Divider,
  Grow,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Skeleton,
  Zoom,
} from "@mui/material";
import { Info } from "@mui/icons-material";

function ProjectList() {

  const [showDetail, setShowDetail] = useState(null);

  function onMouseHover(title){
    setShowDetail(title);
  }

  const [sleep, setSleep] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Bunglow", "Commercial", "High Rise", "Hospital", "Institutional", "Offices", "Town Ship"];

  const filteredItems =
    selectedCategory === "All"
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setSleep(true);
    }, 5000);

    console.log("showing image");

    return () => {setSleep(false); clearInterval(intervalId)};
  }, [selectedCategory]);

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
        {categories.map((cat, index) => (

            <Chip 
                key={cat+index}
                variant={selectedCategory === cat ? "filled" : "outlined"}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: 600,
                    color: "black",
                    
                }} 
                label={cat}
            />

            
        ))}
      </Box>
      <Divider sx={{width: 900, marginLeft: 40 }} />

      <ImageList sx={{ width: '100%', padding: 10 }} cols={3} gap={30}>
        {/* <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">Projects</ListSubheader>
        </ImageListItem> */}

        {filteredItems.map((item, index) => (
          <ImageListItem key={item.title} cols={1}>
            {sleep && item.img ?
                (<img
                  onMouseMove={() => onMouseHover(item.title)}
                  onMouseOut={() => onMouseHover('')}
                  src={`${item.img}`}
                  style={{height: 250, borderRadius: 4}}
                  alt={item.title}
                  loading="lazy"
                />) :
                <Skeleton variant="rectangular" animation="wave" sx={{height: 250, borderRadius: 4 }}/>
            }

            <Zoom in={showDetail === item.title} style={{ transitionDelay: (showDetail === item.title) ? '100ms' : '0ms'}}>
              <ImageListItemBar
                title={item.title}
                subtitle={item.location}
                sx={{
                  borderRadius: 1,
                  opacity: (showDetail === item.title) ? 1 : 0
                }}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.8)"}}
                    aria-label={`info about ${item.title}`}
                  >
                    {/* <Info /> */}
                  </IconButton>
                }
              />
            </Zoom>

          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "/images/projects/BUNGALOWS/Amaltash Residence, Surat/Amaltas Evening_Camera_05 CC.jpg",
    title: "Amaltash Residence",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Amarbhai Lasa Residence, Surat/Cam_01.jpg",
    title: "Amarbhai Lasa Residence",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Dhava House, Sasangir/DHAVA HOUSE BACK SIDE .jpg",
    title: "Dhava House",
    location: "Sasangir",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Fusion Court, Dholakiya Farm, Surat/OP604.jpg",
    title: "Fusion Court",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Hemant Bhai Hoijiwala, Surat/WhatsApp Image 2024-02-05 at 18.16.36_1eadec93.jpg",
    title: "Hemant Bhai Hoijiwala",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Jenga, Surat/Screenshot 2025-06-28 113422.jpg",
    title: "Jenga",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/L+V Prime, Dholakiya Farm,Surat/Screenshot 2025-06-28 105728.jpg",
    title: "L+V Prime",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/The Hinge, Dholakiya Farm, Surat/Screenshot 2025-06-28 103710.jpg",
    title: "The Hing",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/COMMERCIAL/Capital Business Center, Vapi/Night_Side Elevation  View_8070FFFF_00000.jpg",
    title: "Capital Business Center",
    location: "Vapi",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Central Business Hub, Surat/C-B-H-01.jpg",
    title: "Central Business Hub",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Nautilus Laguna, Surat/001B.jpg",
    title: "Nautilus Lagun",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Nexus Tower, Surat/WhatsApp Image 2023-04-27 at 12.35.13 PM (1).jpeg",
    title: "Nexus Tower",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Sangini Aspire, Surat/Screenshot 2025-06-28 165212.jpg",
    title: "Sangini Aspire",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Shreeji House, Surat/3.jpeg",
    title: "Shreeji House",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/CORPORATE OFFICE BUILDING/Sangini House, Surat/Screenshot 2025-06-28 171201.jpg",
    title: "Sangini House",
    location: "Surat",
    category: "Offices",
  },
  {
    img: "images/projects/CORPORATE OFFICE BUILDING/SRK House, Surat/Screenshot 2025-07-02 194507.jpg",
    title: "SRK House",
    location: "Surat",
    category: "Offices",
  },
  {
    img: "images/projects/HEALTH CARE/JayaBen Modi Hospital, Ankleshwar/TRqWf_qJ8mi_26105285_A_13-Photo.jpg",
    title: "JayaBen Modi Hospital",
    location: "Ankleshwar",
    category: "Hospital",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Ahana, Jamshedpur/GATE.jpg",
    title: "Ahana",
    location: "Jamshedpur",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Atlanta Eliza, Surat/Screenshot 2025-06-28 190731.jpg",
    title: "Atlanta Eliza",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Avadh Carolina, Surat/Water_body_view.jpg",
    title: "Avadh Carolina",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/B Blossom, Surat/WhatsApp Image 2022-11-02 at 5.45.42 PM.jpeg",
    title: "B Blossom",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Oliva Breeze, Surat/021.jpg",
    title: "Oliva Breeze",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Sangini Sidddhanta, Surat/6fa866b1-98e3-44c0-88c0-2a021db79b5b.jpg",
    title: "Sangini Sidddhanta",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Sangini Skyteria, Surat/066eb115-5f80-460c-bfb0-99157b2888ca.jpg",
    title: "Sangini Skyteria",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Sangini Terraza, Surat/Screenshot 2025-06-28 165038.jpg",
    title: "Sangini Terraza",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/The Park, Vapi/banner.jpg",
    title: "The Park",
    location: "Vapi",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Tropical Green, Silvaasa/1.jpg",
    title: "Tropical Green",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Vijay Signature, Surat/cb377283-f41d-4145-9a11-d61be4ee91aa.jpg",
    title: "Vijay Signature",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/INSTITUTIONAL/Aarth International School, Surat/Screenshot 2025-07-02 190356.jpg",
    title: "Aarth International School",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Hills Nursery, Surat/Screenshot 2025-07-02 191303.jpg",
    title: "Hills Nursery",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Kiran Medical College,Surat/EFpSr_msFc8_60016625_FINALOPTION_34-Photo.jpg",
    title: "Kiran Medical College",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/M.P.K.B Medical College/ZOfFL_Fx9Wo_84033835_VIEW_4-R1.jpg",
    title: "M.P.K.B Medical College",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Sainik School, Surat/Option 17 (6).png",
    title: "Sainik School",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Sardardham, Rajkot/FQWNj_Pgckx_23968455_VIEWS_01.jpg",
    title: "Sardardham",
    location: "Rajkot",
    category: "Institutional",
  },
  {
    img: "images/projects/TOWNSHIP/Avadh Kimberly, Palsana/27-1.webp",
    title: "Avadh Kimberly",
    location: "Palsana",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Avadh lake Palace, Bardoli/39-3.webp",
    title: "Avadh lake Palace",
    location: "Bardoli",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Avadh Queensbury-Kingsbury/6.jpg",
    title: "Avadh Queensbury-Kingsbury",
    location: "",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Diamond Villedge, Surat/14.jpg",
    title: "Diamond Villedge",
    location: "Surat",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Helois Revanta, Bardoli/Screenshot 2025-06-28 120010.jpg",
    title: "Helois Revanta",
    location: "Bardoli",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Urban Villedge, Bardoli/banner.jpg",
    title: "Urban Villedge",
    location: "Bardoli",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Vida 360, Vapi/banner.jpg",
    title: "Vida 360",
    location: "Vapi",
    category: "Town Ship",
  }     
];

export default ProjectList;
