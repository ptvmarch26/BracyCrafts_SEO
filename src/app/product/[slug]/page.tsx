import { products } from "@/data/MockProduct";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5">{product.name}</h1>
      {/* <Image src={product.image} alt={product.name} width={500} height={500} /> */}
      <p className="text-lg text-gray-700">
        Giá cũ: <span className="line-through">{product.oldPrice.toLocaleString()} đ</span>
      </p>
      <p className="text-lg font-bold text-red-600">
        Giá mới: {product.newPrice.toLocaleString()} đ
      </p>
    </div>
  );
}

// Next.js sẽ tạo static paths từ danh sách sản phẩm
export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
