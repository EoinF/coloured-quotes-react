import { render, screen } from "@testing-library/react";
import App from "./App";
import { mockFetch } from "./testUtils/mockFetch";

const quotes = [
  {
    _id: "5eb17ab3b69dc744b4e820a7",
    quoteText: "Even if you are a minority of one, the truth is the truth.",
    quoteAuthor: "Mahatma Gandhi",
    quoteGenre: "truth",
    __v: 0,
  },
  {
    _id: "5eb17aaeb69dc744b4e75ccc",
    quoteText: "I am just happy to be part of the Nike family.",
    quoteAuthor: "LeBron James",
    quoteGenre: "family",
    __v: 0,
  },
];

let fetchMock: jest.Mock;

beforeEach(() => {
  fetchMock = mockFetch({
    data: quotes,
  });
});

test("fetches a random list of quotes and displays them", async () => {
  render(<App />);
  expect(await screen.findByText(quotes[0].quoteText)).toBeInTheDocument();
  expect(screen.getByText(quotes[1].quoteText)).toBeInTheDocument();
  expect(fetchMock).toHaveBeenCalledWith(
    `${process.env.REACT_APP_QUOTES_ENDPOINT}random?count=2`
  );
});
