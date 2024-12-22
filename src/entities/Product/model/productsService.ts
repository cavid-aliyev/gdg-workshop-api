import { Http } from "@Shared/api/Http/Http";
import { IProductService } from "./ProductService";
import { fetchAllDocuments } from "@Shared/utils/fetchAllDocuments";

export const ProductsService = {
  GetProducts: async (
    params?: IProductService.GetProducts.ParamsPayload
  ): Promise<IProductService.GetProducts.Response> =>
    Http.Request({
      url: "/product",
      params: { limit: 10, page: 1, ...params },
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    }),

  GetAllProducts: async (
    params?: IProductService.GetAllProducts.ParamsPayload
  ): Promise<IProductService.GetAllProducts.Response> =>
    fetchAllDocuments(ProductsService.GetProducts, params),

  GetProduct: async (id: string | string[]): Promise<IProductService.GetProduct.Response> =>
    Http.Request({
      url: `/product/${String(id)}`,
      options: {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    }),

  AddProduct: async (body: FormData): Promise<IProductService.AddProduct.Response> =>
    Http.Request({
      url: "/product",
      options: {
        body,
        method: "POST",
      },
    }),

  UpdateProduct: async (
    id: string | string[],
    body: FormData
  ): Promise<IProductService.UpdateProduct.Response> =>
    Http.Request({
      url: `/product/${String(id)}`,
      options: {
        body,
        method: "PUT",
      },
    }),

  DeleteProduct: async (id: string | string[]): Promise<IProductService.DeleteProduct.Response> =>
    Http.Request({
      url: `/product/${String(id)}`,
      options: {
        method: "DELETE",
      },
    }),
};
