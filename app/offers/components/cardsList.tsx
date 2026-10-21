"use client";

import { useState } from "react";
import { allCards } from "./cards";
import Card from "./card";
import { useRouter, useSearchParams } from "next/navigation";

export default function CardsList() {
 const router = useRouter();
const searchParams = useSearchParams();

const page = Number(searchParams.get("page")) || 1;

function changePage(newPage: number) {
  router.push(`?page=${newPage}`, { scroll: false });
}

const cardsPerPage = 4;
const totalPages = Math.ceil(allCards.length / cardsPerPage);

const visibleCards = allCards.slice(
  (page - 1) * cardsPerPage,
  page * cardsPerPage
);

  return (
    <div className="mt-10">
      <div className="cards" key={page}>
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
    onClick={() => changePage(page - 1)}
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
        onClick={() => changePage(pageNumber)}
        className={page === pageNumber ? "active" : ""}
      >
        {pageNumber}
      </button>
    );
  })}

  {totalPages > 4 && page < totalPages - 2 && (
    <span className="w-15 h-15 bg-[#F4F7FF] rounded-md pt-3 text-center">
      ...
    </span>
  )}

  {totalPages > 3 && page < totalPages - 1 && (
    <button
      onClick={() => changePage(totalPages)}
      className={page === totalPages ? "active" : ""}
    >
      {totalPages}
    </button>
  )}

  <button
    onClick={() => changePage(page + 1)}
    disabled={page === totalPages}
  >
    →
  </button>
</div>
    </div>
  );
}