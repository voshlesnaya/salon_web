"use client";

import { useState } from "react";
import { allCards } from "./cards";
import Card from "./card";

export default function CardsList() {
 const [page, setPage] = useState(1);

const cardsPerPage = 4;
const totalPages = Math.ceil(allCards.length / cardsPerPage);

const visibleCards = allCards.slice(
  (page - 1) * cardsPerPage,
  page * cardsPerPage
);

  return (
    <div>
      <div className="cards">
        {visibleCards.map((card) => (
          <Card
            key={card.id}
            mini_title={card.mini_title}
            title={card.title}
            description={card.description}
            image={card.image}
            date={card.date}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={page === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
}