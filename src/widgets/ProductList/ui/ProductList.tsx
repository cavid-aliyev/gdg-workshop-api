import React from "react";
import { ProductCard } from "@Entities/Product";
import cls from "./ProductList.module.scss";
// @ts-ignore
import type { Product } from "@Entities/Product/model/types";

interface ProductListProps {
  // @ts-ignore
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={cls.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
