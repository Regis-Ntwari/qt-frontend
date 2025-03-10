// services/auth.js

import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();

  localStorage.setItem("authToken", data.result.token); // Store token

  return data;
};

export const signup = async ({ username, email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.result || "Sign Up failed");
  }
};
