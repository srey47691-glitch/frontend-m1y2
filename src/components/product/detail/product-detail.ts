

import { ControllerRenderProps } from "react-hook-form";
import z from "zod";


export type StockStatusCode = "IN_STOCK" | "OUT_OF_STOCK";

export interface StockInfo {
  stockStatusCode?: StockStatusCode;
  stockQuantity?: number;
}

export type option = {
  id: string;
  label: string;
  stockInfo: StockInfo;
  color?: string;
  value: string;
};

export interface Hinges {
  label: string;
  id: string;
  name: FieldName;
  options?: option[];
  min?: number;
  max?: number;
}

export interface ProductImagesProps {
  // images: Array<{
  //   srcset: string;
  //   src: string;
  //   alt: string;
  //   width: number;
  //   height: number;
  //   sizes: string;
  // }>;
  images: string[]
}

export interface ReviewsProps {
  rate: number;
  totalReviewers: number;
}

export interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
  text?: string;
}

export interface ProductInfoProps {
  info?: Array<{
    label: string;
    value: string;
  }>;
}

export const formSchema = z.object({
  color: z.string(),
  quantity: z.number().min(1),
  size: z.string(),
});

export type FormType = z.infer<typeof formSchema>;
export type FieldName = keyof FormType;

export type SizeOptionProps = option;

export interface RadioGroupProps {
  options?: Array<option>;
  field: ControllerRenderProps<FormType>;
}

export interface ProductFormProps {
  hinges?: Record<FieldName, Hinges>;
  selected: FormType;
}

export const PRODUCT_DETAILS = {
  name: "Urban Chill Jacket",
  color: "blue",
  size: "m",
  reviews: {
    rate: 3.5,
    totalReviewers: "5.8k",
  },
  description:
    "This denim puffer jacket blends warmth and street style, featuring tonal blue shades for a distinctive look that's both bold and versatile. Designed for comfort in any season.",
  price: {
    regular: 80.0,
    sale: 69.0,
    currency: "USD",
  },
  hinges: {
    size: {
      label: "Select size",
      id: "size",
      name: "size",
      options: [
        {
          id: "xs",
          label: "xs",
          value: "xs",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK",
          },
        },
        {
          id: "s",
          label: "s",
          value: "s",
          stockInfo: {
            stockStatusCode: "OUT_OF_STOCK",
          },
        },
        {
          id: "m",
          label: "m",
          value: "m",
          stockInfo: {
            stockStatusCode: "IN_STOCK",
          },
        },
        {
          id: "l",
          label: "l",
          value: "l",
          stockInfo: {
            stockStatusCode: "IN_STOCK",
          },
        },
        {
          id: "xl",
          label: "xl",
          value: "xl",
          stockInfo: {
            stockStatusCode: "IN_STOCK",
          },
        },
      ],
    },
  } as Record<FieldName, Hinges>,
  images: [
    {
      srcset:
        "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-3.jpg 1920w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-2.jpg 1280w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-1.jpg 640w",
      src: "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-3.jpg 1920w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-2.jpg 1280w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-2.jpg 640w",
      src: "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764699-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg 1920w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-2.jpg 1280w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-1.jpg 640w",
      src: "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764036-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
    {
      srcset:
        "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-3.jpg 1920w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-2.jpg 1280w, https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-1.jpg 640w",
      src: "https://cdn.shadcnblocks.com/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-3.jpg",
      alt: "",
      width: 1920,
      height: 2880,
      sizes: "(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, 100vw",
    },
  ],
};

export interface ProductDetailComponentProps {
  className?: string;
}