"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductComponent from "./ProductComponent";
import { Product } from "@/data/MockProduct";

export default function ProductList({ products }: { products: Product[] }) {
  const [productLimit, setProductLimit] = useState(6);

  useEffect(() => {
    const updateProductLimit = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setProductLimit(12);
      } else if (width >= 768) {
        setProductLimit(9);
      } else {
        setProductLimit(6);
      }
    };

    updateProductLimit();
    window.addEventListener("resize", updateProductLimit);
    return () => window.removeEventListener("resize", updateProductLimit);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0, productLimit).map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`}>
          <ProductComponent product={product} />
        </Link>
      ))}
    </div>
  );
}
