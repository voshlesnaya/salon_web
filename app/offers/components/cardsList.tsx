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

  {Array.from({ length: Math.min(3, totalPages) }, (_, index) => {
    let pageNumber: number;

    if (page <= 2) {
      pageNumber = index + 1;
    } else if (page >= totalPages - 1) {
      pageNumber = totalPages - 2 + index;
    } else {
      pageNumber = page - 1 + index;
    }

    return (
      <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className={page === pageNumber ? "active" : ""}
      >
        {pageNumber}
      </button>
    );
  })}

  {totalPages > 4 && page < totalPages - 2 && (
    <span>...</span>
  )}

  {totalPages > 3 && page < totalPages - 1 && (
    <button
      onClick={() => setPage(totalPages)}
      className={page === totalPages ? "active" : ""}
    >
      {totalPages}
    </button>
  )}

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