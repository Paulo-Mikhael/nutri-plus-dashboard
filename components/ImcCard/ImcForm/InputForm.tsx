import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";

interface InputFormProps {
  form: UseFormReturn<any>;
  name: string;
  placeholder: string;
  label: string;
}

export function InputForm({ form, name, placeholder, label }: InputFormProps) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </Form>
  );
}
