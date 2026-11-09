import { Controller, useForm } from "react-hook-form";
import { formSchema, FormType, ProductFormProps } from "./product-detail";
import { zodResolver } from "@hookform/resolvers/zod";
import { SizeRadioGroup } from "./SizeRatioGroup";





export const ProductForm = ({ hinges, selected }: ProductFormProps) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: selected?.color,
      size: selected?.size,
      quantity: selected?.quantity,
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  const sizeHinges = hinges?.size;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {sizeHinges && (
        <Controller
          control={form.control}
          name={sizeHinges.name}
          render={({ field }) => (
            <fieldset className="space-y-3">
              <legend className="text-base font-semibold">
                {sizeHinges.label}
              </legend>
              <SizeRadioGroup field={field} options={sizeHinges.options} />
            </fieldset>
          )}
        />
      )}
    </form>
  );
};