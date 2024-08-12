'use client'
import { getAllProductsActions } from "../lib/actions/products";
import ProductCard from "../ui/components/ProductCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  createdDate: string; 
  images: string[];
  condition: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProductsActions(5);
      console.log('Fetched products:', products); // Print products to the console
      setProducts(products);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="m-4 p-4  flex flex-col rounded-lg shadow-lg w-full space-x-8 justify-center">
        <h1>Product List2</h1>
        <div className="space-y-10 p-10">
          {products.map((product: any) => (
            <ProductCard
              id = {product.id}
              key={product.id}
              itemName={product.name}
              itemPrice={product.price}
              itemTime="22:00"
              value="22"
              bid={[]}
              condition={product.condition}
            />
          ))}
        </div>
      </div>
    </>
  );
}
