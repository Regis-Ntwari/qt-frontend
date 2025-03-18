import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addClick } from "../services/urls";

function RedirectPage() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["shortUrl", shortCode],
    queryFn: () =>
      shortCode ? addClick(shortCode) : Promise.reject("Invalid short code"),
    enabled: !!shortCode, // Prevent query from running if shortCode is undefined
    retry: 1,
  });

  useEffect(() => {
    console.log(data);
    if (data?.result?.longUrl) {
      toast.info("Redirecting...", { autoClose: 2000 });
      setTimeout(() => {
        window.location.href = data.result.longUrl;
      }, 2000);
    }
  }, [data]);

  useEffect(() => {
    if (error && shortCode) {
      // Ensure shortCode is valid before navigating
      toast.error(error.message);
      navigate("/");
    }
  }, [error, shortCode, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoading ? <h2>Loading...</h2> : <h2>Redirecting...</h2>}
      <p>Please wait while we take you to the original URL.</p>
    </div>
  );
}

export default RedirectPage;
