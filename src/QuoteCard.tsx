import { FC } from "react";
import { QuoteData } from "./types";

type QuoteCardProps = {
  quote: QuoteData;
};

export const QuoteCard: FC<QuoteCardProps> = ({ quote: { quoteText } }) => {
  return <div>{quoteText}</div>;
};
