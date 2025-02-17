import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";

const API_KEY = "AIzaSyDos69joBisUFichbf_Ib6CJY2hK_nLw8w"; 
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const QUERY = "sports"; // Change this to any category

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}?q=${QUERY}&key=${API_KEY}&maxResults=20&startIndex=${startIndex}`
      );

      if (response.data.items) {
        setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
        setStartIndex((prevIndex) => prevIndex + 20);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const truncateDescription = (text, length = 100) => {
    if (!text) return "No description available.";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div>
      <h1>All Books</h1>
      {error && <p>Error: {error}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {books.map((book) => {
          const { title, authors, description, averageRating, imageLinks } = book.volumeInfo;
          return (
            <div key={book.id} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
              {imageLinks?.thumbnail && (
                <img
                  src={imageLinks.thumbnail}
                  alt={title}
                  style={{ width: "100px", height: "150px", objectFit: "cover" }}
                />
              )}
              <h3 style={{ marginTop: "10px" }}>{title}</h3>
              <p><strong>Author:</strong> {authors?.join(", ") || "Unknown"}</p>
              <p><strong>Ratings:</strong> {averageRating || "No ratings"}</p>
              <p>
                <strong>Description:</strong> {truncateDescription(description)}{" "}
                {description && description.length > 100 && (
                  <button onClick={() => alert(description)}>Read More</button>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <button onClick={fetchBooks} disabled={loading} style={{ marginTop: "20px", padding: "10px" }}>
          {loading ? "Loading..." : "Load More Books"}
        </button>
      )}
    </div>
  );
};

export default BooksList;
