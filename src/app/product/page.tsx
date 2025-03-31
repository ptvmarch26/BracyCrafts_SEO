import { products } from "@/data/MockProduct";
import ProductComponent from "@/components/ProductComponent";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`}>
          <ProductComponent product={product} />
        </Link>
      ))}
    </div>
  );
}
