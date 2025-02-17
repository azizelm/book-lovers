import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API_KEY = "YAIzaSyDos69joBisUFichbf_Ib6CJY2hK_nLw8w";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}&maxResults=10`);
                setBooks(response.data.items || []);
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchBooks();
        }
    }, [query]);

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            {loading && <p>Loading...</p>}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {books.map((book) => (
                    <div key={book.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                        <h3>{book.volumeInfo.title}</h3>
                        {book.volumeInfo.imageLinks?.thumbnail && (
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={{ width: "100px" }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
