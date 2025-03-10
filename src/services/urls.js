export const createUrl = async (url) => {
  // Get the token (example from localStorage)
  const token = localStorage.getItem("authToken");

  const response = await fetch("http://localhost:8080/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Add the token in Authorization header
    },
    body: JSON.stringify({ long_url: url }),
  });

  if (!response.ok) {
    throw new Error("Error creating URL");
  }

  return response.json(); // Return the created URL data
};

export const fetchUrls = async () => {
  const token = localStorage.getItem("authToken");

  const response = await fetch("http://localhost:8080/urls", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Add the token in Authorization header
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching URLs");
  }

  const data = await response.json();

  console.log(data);

  return data.result; // Return the list of URLs
};
