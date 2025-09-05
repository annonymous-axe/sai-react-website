import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { useState } from "react";
import CountUp from "react-countup";

function KPISection() {
  const kpis = [
    { title: "Number of projects across India", value: 3000 },
    { title: "Number of Cities", value: 20 },
    { title: "Team Members", value: 35 },
  ];

  const [counter, setCounter] = useState(true);

  function stopCounter(){
    setCounter(false);
  }

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {kpis.map((kpi, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: "16px",
                  backgroundColor: "white",
                }}
              >
                <Typography variant="h3" fontWeight="bold" color="text.primary">
                  {counter 
                    ? <CountUp end={kpi.value} duration={5} enableScrollSpy={true} scrollSpyOnce={true} onEnd={stopCounter} />
                    : <CountUp start={kpi.value} end={kpi.value}/>
                  }
                  +
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {kpi.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default KPISection;
