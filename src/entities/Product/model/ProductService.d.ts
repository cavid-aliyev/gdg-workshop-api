import { HttpModel } from "@Shared/api/Http/Http";

declare namespace IProductService {
  declare namespace GetProducts {
    export interface ParamsPayload extends HttpModel.IRequestQueryPayload {
      is_new?: boolean;
      search?: string;
      ordering?: string;
      min_price?: number;
      max_price?: number;
      discount?: number;
      page?: number;
      limit?: number;
    }
    interface Response {
      results: IProduct.Product[];
      count: number;
      next: string | null;
      previous: string | null;
    }
  }

  declare namespace GetAllProducts {
    export type ParamsPayload = Omit<GetProducts.ParamsPayload, "limit">;
    export type Response = GetProducts.Response;
  }

  declare namespace GetProduct {
    export type Response = IProduct.Product;
  }

  declare namespace AddProduct {
    export type Response = null;
  }

  declare namespace UpdateProduct {
    export type Response = null;
  }

  declare namespace DeleteProduct {
    export type Response = null;
  }
}

export { IProductService };
