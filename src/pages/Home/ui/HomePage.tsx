import React from "react";
import { ProductList } from "@Widgets/ProductList";
import useProducts from "@Entities/Product/hook/useProducts";
import { Filters } from "@Widgets/Filters";
import { Pagination } from "@Widgets/Pagination";

const HomePage: React.FC = () => {
  const { products, totalProducts, loading } = useProducts({
    params: { page: 1, limit: 8 },
  });

  return (
    <div>
      <Filters />
      {loading ? <p>Loading...</p> : <ProductList products={products || []} />}
      <Pagination totalItems={totalProducts} itemsPerPage={10} />
    </div>
  );
};

export default HomePage;
