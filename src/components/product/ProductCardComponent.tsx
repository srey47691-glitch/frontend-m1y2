import { cn } from "cn";

import { Price, PriceValue } from "@/components/product/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProductResponseType } from "@/lib/products/product-type";

const ProductCardComponent = ({
  images,
  title,
  description,
  price,
}: ProductResponseType) => {
  const PLACEHOLDER = "/assets/placeholder.png";
  const imageSrc =
    images && images.length > 0 && images[0] ? images[0] : PLACEHOLDER;

  return (
    <div
      // href={title}
      className={cn("block max-w-md transition-opacity hover:opacity-80")}
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={500}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-auto">
            <Price onSale={price != null} className="text-lg font-semibold">
              <PriceValue price={price} variant="regular" />
              <PriceValue price={price} variant="sale" />
            </Price>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ProductCardComponent };