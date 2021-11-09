import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteGen() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data);
        console.log(quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div class="p-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-110 transition-all transform ease-in">
          <div class="px-6 py-4">
            <div className="font-bold text-2xl p-4"> {quote.author}</div>
            <div>{quote.content}</div>
          </div>
          <div class="px-6 py-4 pb-2">
            <button
              className="px-3 py-2 bg-blue-500 rounded text-white hover:bg-blue-700 transition-colors transform ease-in"
              onClick={getQuote}
            >
              Generate new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
