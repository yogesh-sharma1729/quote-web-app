import React from "react";

const QuoteCard = ({ quote, author }) => (
  <div className="quote-card">
    <p className="quote">"{quote}"</p>
    <p className="author">- {author}</p>
  </div>
);

export default QuoteCard;
