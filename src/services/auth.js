// services/auth.js

export const login = async (credentials) => {
  const response = await fetch("http://localhost:8080/auth/login", {
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

  localStorage.setItem("authToken", data.token); // Store token

  return data;
};
