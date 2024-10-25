import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface InputFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: keyof T;
  placeholder: string;
  label: string;
  formMessage?: boolean;
}

export function InputForm<T extends FieldValues>({
  form,
  name,
  placeholder,
  label,
  formMessage,
}: InputFormProps<T>) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            {formMessage && <FormMessage />}
          </FormItem>
        )}
      />
    </Form>
  );
}
