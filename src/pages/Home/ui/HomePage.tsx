import React from "react";
import { ProductList } from "@Widgets/ProductList";

const HomePage: React.FC = () => {
  return (
    <div className="theme-div">
      <ProductList products={[]} />
    </div>
  );
};

export default HomePage;
