import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createUrl } from "../services/urls";
import { useNavigate } from "react-router-dom";

const CreateUrl = () => {
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  // React Query Mutation for creating a URL
  const mutation = useMutation({
    mutationFn: createUrl,
    onSuccess: (data) => {
      console.log(data);
      toast.success(`URL Created. Go to List`);
      setUrl(""); // Clear the input field
      navigate("/dashboard/view-data");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(url);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create a URL
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="URL"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          variant="outlined"
          margin="normal"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Create"
          )}
        </Button>
      </form>
    </Box>
  );
};

export default CreateUrl;
