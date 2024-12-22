import React, { useEffect, useState } from "react";
import { ProductsService } from "../model/productsService";
import { IProduct } from "../model/types";
import { IProductService } from "../model/ProductService";

type Props = {
  params?: IProductService.GetProducts.ParamsPayload;
  deps?: any[];
  fetchAll?: boolean;
  fetchCondition?: boolean;
};

const useProducts = ({ params, deps = [], fetchAll, fetchCondition = true }: Props) => {
  const [products, setProducts] = React.useState<IProduct.Product[] | null>(null);
  const [totalProducts, setTotalProducts] = React.useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const fetch = () => {
    setLoading(true);

    if (fetchAll) {
      ProductsService.GetAllProducts(params)
        .then(res => {
          setTotalProducts(res.count);
          setProducts(res.results);
        })
        .catch(e => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      ProductsService.GetProducts(params)
        .then(res => {
          setTotalProducts(res.count);
          setProducts(res.results);
        })
        .catch(e => {
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (fetchCondition) {
      fetch();
    }
  }, [fetchCondition, ...deps]);

  return { products, totalProducts, loading, error };
};

export default useProducts;
