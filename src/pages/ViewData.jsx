import { useQuery } from "@tanstack/react-query";
import { fetchUrls } from "../services/urls";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ViewData = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["urls"], // Query key should be an array
    queryFn: fetchUrls, // The function to fetch data
    // Optionally, you can provide other configurations here
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short Code</TableCell>
            <TableCell>Long URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Created AT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.shortCode}</TableCell>
              <TableCell>{item.longUrl}</TableCell>
              <TableCell>{item.clicks}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewData;
