import React from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const generatePagination = () => {
    const pages = [];

    // Always include the first page
    pages.push(1);

    // Include the first 3 pages
    if (currentPage > 3) {
      pages.push(2, 3);
      pages.push("..."); // Add ellipsis if the current page is beyond the initial range
    }

    // Include the current page and its immediate neighbors
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages - 1);
      i++
    ) {
      if (!pages.includes(i)) pages.push(i);
    }

    // Add an ellipsis if the current page is far from the last pages
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always include the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pagination = generatePagination();

  return (
    <div className={styles.pagination}>
      {pagination.map((page, index) => {
        if (typeof page === "string") {
          return (
            <span key={index} className={styles.ellipsis}>
              {page}
            </span>
          );
        }

        return (
          <button
            key={page}
            className={currentPage === page ? styles.active : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
