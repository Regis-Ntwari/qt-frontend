import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom"; // To render nested routes

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "#333",
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ padding: 3, textAlign: "center" }}>
        <Typography variant="h6" color="white">
          Dashboard
        </Typography>
      </Box>
      <List>
        <ListItem button onClick={() => navigate("/dashboard/create-url")}>
          <ListItemText primary="Create URL" />
        </ListItem>
        <ListItem button onClick={() => navigate("/dashboard/view-data")}>
          <ListItemText primary="View Data" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f4f6f8",
          padding: 3,
          minHeight: "100vh",
        }}
      >
        <Outlet /> {/* This renders the nested routes */}
      </Box>
    </Box>
  );
};

export default Dashboard;
