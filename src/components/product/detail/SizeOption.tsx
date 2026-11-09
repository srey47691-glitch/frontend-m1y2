import { RadioGroupItem } from "@/components/ui/radio-group";
import { SizeOptionProps } from "./product-detail";

export const SizeOption = ({
  id,
  label,
  stockInfo,
  value,
}: SizeOptionProps) => {
  const isOutOfStock = stockInfo.stockStatusCode === "OUT_OF_STOCK";

  return (
    <label
      htmlFor={id}
      className="relative flex h-10 w-16 cursor-pointer items-center justify-center rounded-md border text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground has-checked:bg-primary has-checked:text-primary-foreground has-disabled:pointer-events-none has-disabled:opacity-50"
    >
      <RadioGroupItem
        id={id}
        className="absolute size-px overflow-hidden opacity-0"
        value={value}
        disabled={isOutOfStock}
      />
      <span className="uppercase">{label}</span>
      {isOutOfStock && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-full rotate-45 bg-border"></div>
        </div>
      )}
    </label>
  );
};