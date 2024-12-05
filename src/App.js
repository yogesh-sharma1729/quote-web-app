import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import QuoteButton from "./components/QuoteButton"; 
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Function to fetch a new quote
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random"); 
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div className="app">
      <QuoteCard quote={quote} author={author} />
      <QuoteButton fetchQuote={fetchQuote} />
    </div>
  );
};

export default App;
