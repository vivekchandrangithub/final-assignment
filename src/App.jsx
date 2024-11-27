import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("https://www.freetestapi.com/api/v1/authors");
        setAuthors(response.data); // Populate authors data
        console.log("Fetched Authors Data:", response.data); // Log data to the console
      } catch (err) {
        setError("Failed to fetch authors. Please try again later.");
        console.error("Error fetching authors:", err); // Log the error to the console
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header
        style={{
          background: "#4CAF50",
          color: "#fff",
          padding: "20px 10px",
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>World's Renowned Authors</h1>
        <p style={{ marginTop: "5px", fontSize: "1rem" }}>
          Discover the legends of literature and their timeless works.
        </p>
      </header>

      {/* Main Content */}
      <main style={{ padding: "20px" }}>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {authors.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              padding: "10px",
            }}
          >
            {authors.map((author) => (
              <div
                key={author.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={author.image}
                  alt={author.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "15px" }}>
                  <h2 style={{ margin: "0 0 10px", fontSize: "1.5rem" }}>{author.name}</h2>
                  <p style={{ margin: "5px 0" }}>
                    <strong>Born:</strong> {author.birth_year} | <strong>Died:</strong> {author.death_year || "N/A"}
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <strong>Nationality:</strong> {author.nationality}
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <strong>Genres:</strong> {author.genre.join(", ")}
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <strong>Notable Works:</strong> {author.notable_works.join(", ")}
                  </p>
                  <p style={{ fontStyle: "italic", marginTop: "10px" }}>{author.biography}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading authors...</p>
        )}
      </main>

      {/* Footer Section */}
      <footer
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          textAlign: "center",
          backgroundColor: "#4CAF50",
          color: "#fff",
        }}
      >
        <p>&copy; 2024 Renowned Authors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
