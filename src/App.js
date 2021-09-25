import React, { useState } from "react";
import "./App.css";
const books = {
  Programming: [
    {
      name: "The Road to React",
    },
    {
      name: "React Explained",
    },
    {
      name: "Learning React",
    },
  ],

  Fictional: [
    {
      name: "A Tale of Two Cities",
    },
    {
      name: "Sherlock Holmes",
    },
    {
      name: "Harry Potter",
    },
  ],
  Motivational: [
    {
      name: "Tiny Changes Remarkable Results",
    },
    {
      name: "The Power of Positive Thinking",
    },
    {
      name: "Think and Grow Rich",
    },
  ],
};
export default function App() {
  const [category, setCategory] = useState("Programming");

  return (
    <div className="App">
      <h1>Favourite Books </h1>
      <div className="btn-container">
        {Object.keys(books).map((title) => (
          <button key={title} onClick={() => setCategory(title)}>
            {title}
          </button>
        ))}
      </div>
      <hr />
      <div className="list">
        {books[category].map((book) => (
          <div className="item" key={book.name}>
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
