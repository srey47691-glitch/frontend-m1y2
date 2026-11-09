import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupProps } from "./product-detail";
import { SizeOption } from "./SizeOption";

export const SizeRadioGroup = ({ options, field }: RadioGroupProps) => {
  if (!options) return;

  return (
    <RadioGroup
      {...field}
      value={`${field.value}`}
      onValueChange={(value) => {
        if (value != field.value && value) {
          field.onChange(value);
        }
      }}
      className="flex flex-wrap gap-3"
    >
      {options &&
        options.map((item, index) => (
          <SizeOption
            key={`product-detail-1-size-input-${index}`}
            stockInfo={item.stockInfo}
            id={item.id}
            label={item.label}
            value={item.value}
          />
        ))}
    </RadioGroup>
  );
};