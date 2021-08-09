import React, { useState, useEffect } from "react";

export default function DisplayQuote() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const url = "https://type.fit/api/quotes";
    // Network request
    const response = await fetch(url);
    const data = await response.json();

    // Pick a Random number for random quote
    const rand = Math.floor(Math.random() * 1643) + 1;

    // Feed updateQuote with info
    const text = data[rand].text;
    const author = data[rand].author;
    setQuote({ text, author });
  };
  return (
    <div>
      <div>{quote.text}</div>
      <div>{quote.author}</div>
    </div>
  );
}
