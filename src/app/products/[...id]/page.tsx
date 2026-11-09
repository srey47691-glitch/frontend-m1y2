
import { ProductDetailComponent } from "@/components/product/detail/ProductDetailComponent";
import { Suspense } from "react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const getSingleProduct = fetch(`${process.env.DUMMY_API_URL}/products/${id}`)
    .then((data) => data.json())
    .then((product) => {
      console.log(`Single data: `, product);
      return product;
    })
    .catch((error) => error);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProductDetailComponent product={getSingleProduct} />
    </Suspense>
  );
}
