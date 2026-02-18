import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

const quotes = [
  { text: "Believe you can and you're halfway there.", author: "T. Roosevelt" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Action is the foundational key to success.", author: "Pablo Picasso" },
  { text: "Do what you can, with what you have.", author: "Theodore Roosevelt" }
];

export default function App() {
  const [quote, setQuote] = useState({});
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);

  const quoteRef = useRef(null);

  // useCallback → generate random quote
  const generateQuote = useCallback(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
    setCount((prev) => prev + 1);
  }, []);

  // useEffect → run on page load
  useEffect(() => {
    generateQuote();
    document.title = "Random Quote Generator";
  }, [generateQuote]);

  // Copy Quote
  const copyQuote = () => {
    const text = quoteRef.current.innerText;
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Random Quote Generator</h2>

        <p ref={quoteRef} className="quote">
          "{quote.text}"
        </p>
        <p className="author">– {quote.author}</p>

        <div className="buttons">
          <button className="new" onClick={generateQuote}>
            New Quote
          </button>
          <button className="copy" onClick={copyQuote}>
            Copy Quote
          </button>
        </div>

        {copied && <div className="copied">Copied!</div>}

        <p className="count">Quotes Generated: {count}</p>
      </div>
    </div>
  );
}
