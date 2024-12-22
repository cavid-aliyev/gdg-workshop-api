import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductList } from "@Widgets/ProductList";
import useProducts from "@Entities/Product/hook/useProducts";
import { Filters } from "@Widgets/Filters";
import { Pagination } from "@Widgets/Pagination";
import removeFalsyObjKeys from "@Shared/utils/removeFalsyObjKeys";

type Filters = {
  search?: string;
  min_price?: number;
  max_price?: number;
};

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get("page")) || 1);
  const [filters, setFilters] = useState<Filters>({
    search: searchParams.get("search") || "",
    min_price: searchParams.get("min_price") ? Number(searchParams.get("min_price")) : undefined,
    max_price: searchParams.get("max_price") ? Number(searchParams.get("max_price")) : undefined,
  });

  const { products, totalProducts, loading } = useProducts({
    params: { page: currentPage, limit: 8, ...filters },
    deps: [currentPage, filters], // Re-fetch on page or filter change
  });

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const params = removeFalsyObjKeys({ page: currentPage, ...filters });
    setSearchParams(params as Record<string, string>);
  }, [filters, currentPage]);

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      {loading ? <p>Loading...</p> : <ProductList products={products || []} />}
      <Pagination
        totalItems={totalProducts}
        itemsPerPage={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
