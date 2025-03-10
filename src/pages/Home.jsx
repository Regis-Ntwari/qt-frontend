import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, Container, Grid2 } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Grid2 container>
      <Grid2 item size={{ xs: 0, md: 3 }}></Grid2>
      <Grid2 item size={{ xs: 12, md: 6 }}>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            Welcome to Our URL shortener!
          </Typography>
          <Typography variant="h6" sx={{ color: "gray", mb: 4 }}>
            Get started by logging in or signing up.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ px: 4 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ px: 4 }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </Grid2>
      <Grid2 item size={{ xs: 0, md: 3 }}></Grid2>
    </Grid2>
  );
};

export default Home;
