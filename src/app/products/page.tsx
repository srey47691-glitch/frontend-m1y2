import ProductCardListComponent from "@/components/product/ProductCardListComponent";
import { Suspense } from "react";
// logic of getAllProduct () fetching datafrom  API (server-side)

const getAllProducts = () =>
  fetch(`${process.env.DUMMY_API_URL}/products`)
    .then(data => data.json())
    .then(products => products.products)
    .catch(error=> error)
export default function Productpage() {
  const productList = getAllProducts();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProductCardListComponent product={productList } />
    </Suspense>
  ); 
}


