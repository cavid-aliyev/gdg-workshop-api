import React from "react";
import cls from "./Filters.module.scss";

interface FiltersProps {
  onChange: (key: string, value: string | number) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  return (
    <div className={cls.filters}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={e => onChange("search", e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        onChange={e => onChange("min_price", e.target.valueAsNumber)}
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={e => onChange("max_price", e.target.valueAsNumber)}
      />
    </div>
  );
};
