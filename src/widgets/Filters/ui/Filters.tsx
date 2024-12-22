import React, { useState } from "react";
import styles from "./Filters.module.scss";

interface FiltersProps {
  onFilterChange: (filters: { search?: string; min_price?: number; max_price?: number }) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const handleFilterChange = () => {
    onFilterChange({ search, min_price: minPrice, max_price: maxPrice });
  };

  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice || ""}
        onChange={e => setMinPrice(e.target.valueAsNumber || undefined)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice || ""}
        onChange={e => setMaxPrice(e.target.valueAsNumber || undefined)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};
