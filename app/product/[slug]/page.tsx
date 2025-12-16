import { getProduct } from "@/app/actions/product";
import ProductDetails from "@/component/product/ProductDetails";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

const Page = async ({ params }: ProductPageProps) => {
  
  const { slug } = await params;

  const result = await getProduct(slug);

  if (!result.success || !result.data) {
    return (
      <div className="mt-[80px] min-h-[60vh] flex items-center justify-center bg-[#F8F9FA] px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
            Product not found
          </h1>
          <p className="text-gray-600 mb-6">
            The product you&apos;re looking for may have been removed or is
            temporarily unavailable.
          </p>
          <Link
            href="/product"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1a3a5e] transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[50px] md:mt-[70px]">
      <ProductDetails product={result.data} />
    </div>
  );
};

export default Page;
