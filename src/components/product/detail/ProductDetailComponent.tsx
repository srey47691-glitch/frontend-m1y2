"use client";

import { CircleCheck } from "lucide-react";
import { cn } from "cn";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { PRODUCT_DETAILS } from "./product-detail";
import { ProductImages } from "./ProductImages";
import { Reviews } from "./Review";
import { ProductForm } from "./ProductForm";

import { use } from "react";
import { PriceValue } from "../price";
import { ProductInfo } from "./productInfo";

interface ProductDetailResponse {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
  reviews: [];
}

const ProductDetailComponent = ({
  product,
}: {
  product: Promise<ProductDetailResponse>;
}) => {
  const singleProduct = use(product);

  const { title, description, price, rating, images, reviews } = singleProduct;

  return (
    <section className={cn("py-32")}>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <ProductImages images={images} />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    {title}
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <Reviews rate={rating} totalReviewers={reviews.length} />
                    <Badge variant="secondary">
                      <CircleCheck />
                      In Stock
                    </Badge>
                  </div>
                </div>
                <PriceValue
                  price={price}
                  variant="regular"
                  className="text-red-500 font-bold ml-2"
                />
                <PriceValue price={price} variant="sale" />
              </div>

              <p className="text-muted-foreground">{description}</p>
            </div>

            <Button size="lg" className="w-full">
              Buy Now
            </Button>

            <ProductForm
              hinges={PRODUCT_DETAILS.hinges}
              selected={{
                size: PRODUCT_DETAILS.size,
                color: PRODUCT_DETAILS.color,
                quantity: 1,
              }}
            />
            <ProductInfo
              info={[
                {
                  label: "Material",
                  value: "100% Premium Denim",
                },
                {
                  label: "Style",
                  value: "Puffer Jacket",
                },
                {
                  label: "Season",
                  value: "All Season",
                },
                {
                  label: "Care",
                  value: "Machine Washable",
                },
                {
                  label: "Origin",
                  value: "Made in Italy",
                },
                {
                  label: "Fit",
                  value: "Regular Fit",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductDetailComponent };