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
  productCart: CartProduct[];
  createProduct: (product: Products) => void;
  getProduct: (product: Products) => CartProduct;
  deleteProduct: (product: Products) => void;
};

const CartContext = createContext<ContextType>({} as ContextType);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [productCart, setProductCart] = useState<CartProduct[]>([]);

  const createProduct = (product: Products) => {};

  const getProduct = (product: Products) => {};

  const deleteProduct = (product: Products) => {};

  return (
    // <CartContext.Provider
    //   // value={{
    //   //   productCart,
    //   //   createProduct,
        
    //   //   deleteProduct,
    //   // }}
    // >
    //   {children}
    // </CartContext.Provider>
  );
};

export const useProduct = () => useContext(CartContext);
