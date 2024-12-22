declare namespace IProduct {
  export interface ProductCategory {
    id: number;
    name: string;
    modified_at: string;
    created_at: string;
  }

  export interface ProductImage {
    id: number;
    image: string;
  }

  export interface Product {
    id: number;
    name: string;
    category: ProductCategory;
    images: ProductImage[];
    ingredients: string;
    price: string;
    discount: number;
    is_new: boolean;
    views: number;
    modified_at: string;
    created_at: string;
  }
}
export type { IProduct };
