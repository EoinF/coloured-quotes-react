import "./App.css";
import { useEffect, useState } from "react";
import { QuoteData } from "./types";
import { QuoteCard } from "./QuoteCard";

function App() {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  useEffect(() => {
    const getRandomQuotes = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_QUOTES_ENDPOINT}random?count=2`
      );

      const newQuotes = await response.json();
      setQuotes(newQuotes.data);
    };
    getRandomQuotes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {quotes.map((quote) => (
          <QuoteCard key={quote._id} quote={quote} />
        ))}
      </header>
    </div>
  );
}

export default App;
