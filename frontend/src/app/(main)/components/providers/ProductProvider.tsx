"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Products {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  size: string;
  color: string;
  productCode: string;
  torolId: string;
  quantity: number;
}

type CartProduct = {
  product: Products;
};

type ContextType = {
  products: CartProduct[]; // Corrected to 'products'
  createProduct: (product: Products) => void;
  getProduct: (id: string) => CartProduct | undefined; // Adjusted for better usage
  deleteProduct: (id: string) => void; // Using id for deletion
  updateProduct: (product: Products) => void;
};

const CartContext = createContext<ContextType>({} as ContextType);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<CartProduct[]>([]); // Initialize state

  const createProduct = (product: Products) => {
    setProducts((prev) => [...prev, { product }]);
  };

  const getProduct = (id: string) => {
    return products.find((p) => p.product.id === id);
  };

  const deleteProduct = () => {};

  const updateProduct = () => {};

  return (
    <CartContext.Provider
      value={{
        products, // Correctly reference products state
        createProduct,
        getProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useProduct = () => useContext(CartContext);
