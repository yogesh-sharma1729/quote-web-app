import React from "react";

const QuoteButton = ({ fetchQuote }) => (
  <button className="quote-button" onClick={fetchQuote}>
    Get New Quote
  </button>
);

export default QuoteButton;
