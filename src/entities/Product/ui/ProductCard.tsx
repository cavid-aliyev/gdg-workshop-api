import React from "react";
import { Product } from "../model/types";
import cls from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={cls.card}>
      <img src={product.images[0]?.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category.name}</p>
      <p>{product.price} AZN</p>
    </div>
  );
};
