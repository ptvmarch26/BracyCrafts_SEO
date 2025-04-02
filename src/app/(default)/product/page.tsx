import { products } from "@/data/MockProduct";
import ProductComponent from "@/components/ProductComponent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm",
};

export default function ProductList() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl pacifico font-medium text-primary text-center mb-5">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <ProductComponent product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
