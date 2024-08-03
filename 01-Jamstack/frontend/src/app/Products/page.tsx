"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
interface Product {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    image?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=image`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setProducts(result.data);
      } catch (error) {
        setError(
          "Une erreur est survenue lors de la récupération des produits."
        );
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-6">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Nos Produits
        </h1>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col"
            >
              {product.attributes.image?.data?.attributes.url && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.attributes.image.data.attributes.url}`}
                  alt={product.attributes.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="flex flex-col flex-grow p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.attributes.name}
                </h2>
                <p className="text-gray-600 mt-2 flex-grow">
                  {product.attributes.description}
                </p>
                <p className="text-blue-600 font-semibold mt-4 self-start">
                  {product.attributes.price} €
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
