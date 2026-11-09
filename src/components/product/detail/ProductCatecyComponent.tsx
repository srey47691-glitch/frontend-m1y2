
"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CategoryProduct {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
}

interface CategoryResponse {
  products: CategoryProduct[];
}

const ProductCategoryComponent = ({
  category,
}: {
  category: Promise<CategoryResponse>;
}) => {
  const data = use(category);
  const products = data?.products ?? [];

  return (
    <section className={cn("py-16")}>
      <div className="container">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(
            ({
              id,
              title,
              description,
              price,
              discountPercentage,
              thumbnail,
            }) => {
              const hasDiscount =
                !!discountPercentage && discountPercentage > 0;
              const salePrice = hasDiscount
                ? price * (1 - discountPercentage! / 100)
                : price;

              return (
                <Link
                  key={id}
                  href={`/product/${id}`}
                  className="block transition-opacity hover:opacity-80"
                >
                  <Card className="h-full overflow-hidden p-0">
                    <CardHeader className="relative block p-0">
                      <AspectRatio ratio={1.268} className="overflow-hidden">
                        <Image
                          src={thumbnail}
                          alt={title}
                          width={500}
                          height={500}
                          className="block size-full object-cover object-center"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="flex h-full flex-col gap-4 pb-6">
                      <CardTitle className="text-xl font-semibold">
                        {title}
                      </CardTitle>
                      {description && (
                        <CardDescription className="line-clamp-4 font-medium text-muted-foreground">
                          {description}
                        </CardDescription>
                      )}
                      <div className="mt-auto flex items-center gap-2 text-lg font-semibold">
                        {hasDiscount && (
                          <span className="text-muted-foreground line-through">
                            ${price.toFixed(2)}
                          </span>
                        )}
                        <span>${salePrice.toFixed(2)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export { ProductCategoryComponent };